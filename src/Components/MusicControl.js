import React from 'react'
import { useState } from 'react'

export default function MusicControl() {
  return (
    <div class="controls flex items-center w-full absolute bottom-0 bg-slate-500 h-24 px-8">

        <div className="currentTrack basis-1/3 h-20 flex items-center justify-start gap-4">

          <img className='w-20 h-20' src="/SampleCover.png" alt="" />

          <div className="trackItems flex flex-col items-start">

            <div className="trackName font-bold">The Real Slim Shady</div>

            <div className="trackSinger font-light">Eminem</div>

          </div>
        </div>

        <div className="mainControls basis-1/3 flex flex-col justify-evenly h-20 flex-grow items-center">

            <div className="upperControls flex gap-7">
              <div className="shuffle"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 8H6.8915C7.58108 8 8.22202 8.35524 8.5875 8.94L12.4125 15.06C12.778 15.6448 13.4189 16 14.1085 16H20M20 16L17.5 13.5M20 16L17.5 18.5M14 8H20M20 8L17.5 10.5M20 8L17.5 5.5M4 16H8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>

              <div className="coreControls flex gap-7">
                  <div className="prevTrack rotate-180">
                      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.15" d="M5 6V18L15 12L5 6Z" fill="#000000"/><path d="M19 6V18M5 18L5 6L15 12L5 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>

                  <div className="pauseTrack">
                      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.46484 3.92349C4.79896 3.5739 4 4.05683 4 4.80888V19.1911C4 19.9432 4.79896 20.4261 5.46483 20.0765L19.1622 12.8854C19.8758 12.5108 19.8758 11.4892 19.1622 11.1146L5.46484 3.92349ZM2 4.80888C2 2.55271 4.3969 1.10395 6.39451 2.15269L20.0919 9.34382C22.2326 10.4677 22.2325 13.5324 20.0919 14.6562L6.3945 21.8473C4.39689 22.8961 2 21.4473 2 19.1911V4.80888Z" fill="#000000"/></svg>
                  </div>

                  <div className="nextTrack">
                      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.15" d="M5 6V18L15 12L5 6Z" fill="#000000"/><path d="M19 6V18M5 18L5 6L15 12L5 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </div>
              </div>

              <div className="favBtn"><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#000000" stroke-width="2"/></svg></div>
            </div>

            <div className="trackTimeline flex items-center justify-between gap-2 w-full">
              <div className="timeSpend w-fit">1:23</div>
              <div className="timeLine h-1 w-full bg-white rounded-md relative">
                <div className="timeLineSpent w-20 h-1 bg-red-600 rounded-md absolute"></div>
              </div>
              <div className="trackDuration w-fit">3:40</div>
            </div>

        </div>

        <div className="coverView  basis-1/3 flex justify-end"> {/*This button is for cover view while playing the track and not yet a priority*/}<svg className='w-8' width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="0" fill="none" width="20" height="20"/><g><path d="M2.2 1h15.5c.7 0 1.3.6 1.3 1.2v11.5c0 .7-.6 1.2-1.2 1.2H2.2c-.6.1-1.2-.5-1.2-1.1V2.2C1 1.6 1.6 1 2.2 1zM17 13V3H3v10h14zm-4-4s0-5 3-5v7c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V7c2 0 3 4 3 4s1-4 3-4 3 2 3 2zM4 17h12v2H4z"/></g></svg></div>
    </div>
  )
}
