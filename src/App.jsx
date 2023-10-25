import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"


import { Home } from "./pages/Home";
import Feeds from "./components/Feeds";
import { FILTERS_TYPE, Reddit } from "./util/Reddit";

function App() {

  const [data, setData] = useState(null);

  const isImageOnlyPost = (post) => {
    if (!post.data.is_video & !post.data.is_gallery & !post.data.is_self) {
      return true;
    } else {
      return false;
    }
  };

  // recuperer les données sur reddit pour initialiser la home
  useEffect(() => {

    Reddit.getFeed(FILTERS_TYPE.default).then((json) => {
      let feed = [];
      if (json) {
        feed = json.data.children.filter(isImageOnlyPost);
      }
      setData([...feed]);
      return feed;
    })
  }, []);

  const showBest = () => {
    Reddit.getFeed(FILTERS_TYPE.best).then((json) => {
      let feed = [];
      if (json) {
        feed = json.data.children.filter(isImageOnlyPost);
      }
      setData([...feed]);
      return feed;
    })
  }

  const showHot = () => {
    Reddit.getFeed(FILTERS_TYPE.hot).then((json) => {
      let feed = [];
      if (json) {
        feed = json.data.children.filter(isImageOnlyPost);
      }
      setData([...feed]);
      return feed;
    })
  }

  const showNew = () => {
    Reddit.getFeed(FILTERS_TYPE.new).then((json) => {
      let feed = [];
      if (json) {
        feed = json.data.children.filter(isImageOnlyPost);
      }
      setData([...feed]);
      return feed;
    })
  }

  const showTop = () => {
    Reddit.getFeed(FILTERS_TYPE.top).then((json) => {
      let feed = [];
      if (json) {
        feed = json.data.children.filter(isImageOnlyPost);
      }
      setData([...feed]);
      return feed;
    })
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Home showBest={showBest} showHot={showHot} showNew={showNew} showTop={showTop} /> }>
      <Route index element={  <Feeds posts={data} /> } />
      <Route path="/best" element={  <Feeds posts={data} /> } />
      <Route path="/hot" element={  <Feeds posts={data} /> }/>
      <Route path="/new" element={  <Feeds posts={data} /> }/>
      <Route path="/top" element={  <Feeds posts={data} /> }/>
     </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );

}

export default App
