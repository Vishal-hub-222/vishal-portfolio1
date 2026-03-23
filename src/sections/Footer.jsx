import React from 'react'
import { socialImgs } from '../constants'

function Footer() {
  return (
  <footer className='footer'>
    <div className='footer_container'>
        <div className="flex flex-col justify-center items-center md:items-center">
            <a href='/'>Visit my blog</a>
        </div>
        <div className='socials'>
            {socialImgs.map((img)=>(
                <a className='icon' target='_blank' href={img.url} key={img.url}>
                    <img src={img.imgPath} alt="" />
                </a>
            ))}
        </div>
        <div className='flex flex-col justify-center'>
            <p className='text-center md:text-end'>
               © {new Date().getFullYear()} vishal maurya. All rights reserved.
            </p>
        </div>
    </div>
  </footer>
  )
}

export default Footer