import React from 'react'
import {useState} from 'react'; 

function PopUp() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
    setClick(!click);
  }
  return (
      <div  className={'h-44 sm:h-60 w-96 bg-gray-700 text-white text-left sm:col-span-1 col-span-3'}>
          <h2 className={'mx-5 pt-5 text-xl'}>Title</h2>
          <h2 className={'mx-5'}>________________________________________________</h2>
          <p className={'mx-5 text-xs sm:text-sm sm:pt-6 pt-2 text-white'}>text text text text text text text text text text</p>
          <p className={'mx-5 text-xs sm:text-sm text-white'}>text text text text text text text text text text</p>
          <p className={'mx-5 text-xs sm:text-sm text-white'}>text text text text text text text text text text</p>
          <p className={'mx-5 text-xs sm:text-sm text-white'}>text text text text text text text text text text</p>
          <h2 className={click?'inline-block mx-5' : 'hidden'}>________________________________________________</h2>
          <h2 className={click?'mx-5 pt-5 text-xl':'hidden'}>Title</h2>
        </div>
  )
}

export default PopUp
