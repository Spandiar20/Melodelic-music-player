import React from 'react'
import { AlbumItem } from './styled/AlbumItem.styled'


export default function () {
  return (
    <div className="w-fit h-[40rem] px-4 py-4 outerDiv border relative top-20 left-[-1] bg-slate-500 overflow-hidden">

        <div className="container w-full h-full flex flex-col gap-4 overflow-auto flex-grow-0 scrollbar-hide">
        
            <AlbumItem>

                <img src="/SampleCover.png" alt="" />

            </AlbumItem>

            
        </div>
        
    </div>


  )
}
