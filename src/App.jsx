import React, { useEffect, useState } from "react";

import { mockData } from "./tests/data";
import Header from "./components/Header";
import Feeds from "./components/Feeds";
import { Reddit } from "./util/Reddit";

function App() {

  const [data, setData] = useState(null);

  // recuperer les données sur reddit pour initialiser la home
  useEffect(() => {
    let promise = Reddit.getFeed();
    let feed = [];
    promise.then((json) => {
      if (json.data) {
        feed = json.data.children.map((post) => post.data);
      }
      setData([...feed]);
    });
  }, []);

  return (
    <>
      <div className='bg-white flex flex-col justify-start items-center gap-10 lg:gap-20 w-full'>
        <div className='h-[70px]'>
          <Header />
        </div>
        <div id="feeds" className='flex flex-col gap-y-10 lg:gap-y-14 pb-20'>
          <Feeds posts={data} />
        </div>
      </div>
    </>
  )
}

export default App
