

function App() {

  return (
    <>
      <div className='bg-white flex flex-col justify-start items-center gap-10 lg:gap-20 w-full'>

        <div className='h-[70px]'>
          <div id='header' className='bg-teal-300 left-0 top-0 w-full h-[70px] fixed flex justify-start items-center'>
            <div className='grid grid-cols-6 px-2 w-full items-center'>
              <div className='col-span-4 inline-flex items-center gap-3'>
                <div className='rounded-full w-8 h-8 bg-teal-500 flex justify-center items-center overflow-clip'>
                  <img src='../public/cat.png' className='w-7 h-7'></img>
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
            <div id="post" className='bg-yellow-200 w-[280px] h-[300px] rounded-lg lg:w-[650px] lg:h-[450px]'>
              <p>post</p>
            </div>
            <div id="post" className='bg-yellow-200 w-[280px] h-[300px] rounded-lg lg:w-[650px] lg:h-[450px]'>
              <p>post</p>
            </div>
            <div id="post" className='bg-yellow-200 w-[280px] h-[300px] rounded-lg lg:w-[650px] lg:h-[450px]'>
              <p>post</p>
            </div>

        </div>

      </div>
    </>
  )
}

export default App
