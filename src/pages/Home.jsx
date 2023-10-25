import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";


export const Home = ({
    showBest,
    showHot,
    showNew,
    showTop
}) => {

    return (
        <>
          <div className='bg-white flex flex-col justify-start items-center gap-10 lg:gap-20 w-full'>
            <div className='h-[70px]'>
              <Header showBest={showBest} showHot={showHot} showNew={showNew} showTop={showTop}/>
            </div>
            <div id="feeds" className='flex flex-col gap-y-10 lg:gap-y-14 pb-20'>
            <Outlet/>
             
            </div>
          </div>
        </>
      )
}
