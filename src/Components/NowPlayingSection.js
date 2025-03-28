import React from 'react'

export default function NowPlayingSection() {
  return (
    <div className='absolute right-0'>
    
        <div className="container w-96 h-[35rem] bg-black px-6 py-4">

            <header>

                <div className="albumTitle font-bold text-white text-xl text-start mb-3">Slim Shady LP</div>
                <div className="optionsBtn"></div>

            </header>

            <section className='flex flex-col gap-4'>

                <div className="trackCover">
                    <img src="/SampleCover.png" alt="" />
                </div>

                <div className="trackDetails flex items-center justify-between w-full">
                    <div className="details flex flex-col align-start justify-between">

                        <div className="trackName font-extrabold text-white text-2xl">The Real Slim Shay</div>
                        <div className="trackSinger font-light text-white w-fit">Eminem</div>

                    </div>
                    <div className="favBtn h-fit"><svg width="600px" height="600px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#ffffff" stroke-width="2"/></svg></div>
                </div>

            </section>


        </div>
    
    </div>
  )
}
