import React, { useState } from "react";

import { mockData } from "./tests/data";
import Header from "./components/Header";
import Feeds from "./components/Feeds";

function App() {

  const [ data, setData ] = useState(mockData);

  //console.log("data: ", data);
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
