

function App() {

  return (
    <>
      <div className='bg-white flex flex-col justify-start items-center gap-10 lg:gap-20 w-full'>

        <div className='h-[70px]'>
          <div id='header' className='bg-teal-300 left-0 top-0 w-full h-[70px] fixed flex justify-start items-center'>
            <div className='grid grid-cols-6 px-2 w-full items-center'>
              <div className='col-span-4 inline-flex items-center gap-3'>
                <div className='rounded-full w-8 h-8 bg-teal-500 flex justify-center items-center overflow-clip'>
                  <img src='cat.png' className='w-7 h-7'></img>
                </div>
                <div>
                  <span className="text-pink-400 text-2xl lg:text-3xl font-semibold font-['Inter']">Reddit</span>
                  <span className="text-fuchsia-600 text-2xl font-normal font-['Inter']">/</span>
                  <span className="text-pink-400 text-base lg:text-2xl font-normal font-['Inter']">cats</span>
                </div>
              </div>
              <div className='place-self-end col-span-2'>
                <button id="search" className='hover:bg-teal-500 rounded-xl px-2 py-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-5 h-5 lg:w-8 lg:h-8">
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
                  <button id="up-vote" className="bg-white hover:bg-fuchsia-600 h-6 w-8 rounded-l-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-fuchsia-600 hover:fill-white">
                      <path fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div id="votes-counter" className="bg-white text-fuchsia-600 text-sm lg:text-base font-normal font-['Inter'] h-6 flex items-center">345</div>
                  <button id="down-vote" className="bg-white hover:bg-fuchsia-600 h-6 w-8 rounded-r-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 fill-fuchsia-600  hover:fill-white">
                      <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="col-span-3 place-self-end">
                <div id="comments-button" className="h-6 inline-flex justify-center items-center">
                  <button id="comments" className="bg-white hover:bg-fuchsia-600 h-6 w-16 rounded-xl flex items-center justify-center gap-2 text-fuchsia-600 text-sm lg:text-base font-normal font-['Inter']  hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-fuchsia-600  hover:fill-white">
                      <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                      <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                    </svg>
                    10
                  </button>
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
