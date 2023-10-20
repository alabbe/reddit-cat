

function App() {

  return (
    <>
      <div className='bg-white flex flex-col justify-start items-center gap-10 lg:gap-20 w-full'>

        <div className='h-[70px]'>
          <div id='header' className='bg-teal-300 left-0 top-0 w-full h-[70px] fixed flex justify-start items-center'>
            <div className='grid grid-cols-6 px-2 w-full items-center'>
              <div className='col-span-4 lg:col-span-2 inline-flex items-center gap-3'>
                <div className='rounded-full w-8 h-8 bg-teal-500 flex justify-center items-center overflow-clip'>
                  <img src='cat.png' className='w-7 h-7'></img>
                </div>
                <div>
                  <span className="text-pink-400 text-2xl lg:text-3xl font-semibold font-['Inter']">Reddit</span>
                  <span className="text-fuchsia-600 text-2xl font-normal font-['Inter']">/</span>
                  <span className="text-pink-400 text-base lg:text-2xl font-normal font-['Inter']">cats</span>
                </div>
              </div>
              <div id="categories" className="lg:col-span-2 bottom-2 fixed lg:static w-64 bg-teal-300 rounded-lg place-self-center">
                <div className="grid grid-cols-4 justify-between h-full items-center px-2 py-1">
                  <div className="">
                    <a href="#" className="text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>

                      Best
                    </a>
                  </div>
                  <div className="">
                    <a href="#" className="text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                      </svg>
                      Hot
                    </a>
                  </div>
                  <div className="">
                    <a href="#" className="text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>

                      New
                    </a>
                  </div>
                  <div className="">
                    <a href="#" className="text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
                      </svg>

                      Top
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-span-2 justify-self-end'>
                <button id="search" className='text-white hover:text-fuchsia-600 rounded-xl px-2 py-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-8 lg:h-8">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="feeds" className='flex flex-col gap-y-10 lg:gap-y-14'>

          <div id="post" className='bg-yellow-200 w-[280px] rounded-lg lg:w-[650px] lg:h-[450px] p-2'>
            <div className="grid grid-cols-6 w-full items-center gap-2">
              <div className="col-span-4">
                <div id="author" className="flex justify-start items-center gap-2">
                  <div className="rounded-full w-5 h-5 bg-zinc-300"></div>
                  <span className="text-pink-400 text-base lg:text-lg font-normal font-['Inter']">u/author_name</span>
                </div>
              </div>
              <div className="col-span-2 place-self-end">
                <span className="text-pink-400 text-base lg:text-lg font-light font-['Inter']">8h ago</span>
              </div>
              <div className="col-span-6">
                <span className=" text-pink-400 text-base lg:text-lg font-bold font-['Inter']">This my incredible title about my cat story</span>
              </div>
              <div id="media-container" className="col-span-6 h-[320px] bg-white">
              </div>
              <div className="col-span-3">
                <div id="upvote-button" className="h-6 inline-flex justify-center items-center ">
                  <a id="up-vote" className="group bg-white hover:bg-fuchsia-600 h-6 w-8 rounded-l-full flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-fuchsia-600 group-hover:fill-white">
                      <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <div id="votes-counter" className="bg-white text-fuchsia-600 text-sm lg:text-base font-normal font-['Inter'] h-6 flex items-center">345</div>
                  <a id="down-vote" className="group bg-white hover:bg-fuchsia-600 h-6 w-8 rounded-r-full flex items-center justify-center cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-fuchsia-600  group-hover:fill-white">
                      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="col-span-3 place-self-end">
                <div id="comments-button" className="h-6 inline-flex justify-center items-center">
                  <a id="comments" className="group bg-white hover:bg-fuchsia-600 h-6 w-16 rounded-xl flex items-center justify-center gap-2 text-fuchsia-600 text-sm lg:text-base font-normal font-['Inter']  hover:text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-fuchsia-600  group-hover:fill-white">
                      <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                      <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                    </svg>
                    10
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>
    </>
  )
}

export default App
