import React from 'react'

function CustomerReview(props) {
  return (
    <div className={'h-44 sm:h-60 w-96 bg-white sm:col-span-1 col-span-3'}>
    <div className={'flex justify-start flex-row text-left '}>
              <div className={'ml-16 sm:ml-12 mt-6 sm:mt-10'}>
              <img  
                className = {'h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-gray-300 '}  
                alt='img'
                src={`images/img.png`}
                />
              </div> 
              <div className={'sm:ml-5 ml-2 mt-7 sm:mt-12'}>
                  <h3 className={'text-md'}>{props.name}</h3>
                  <p className={'text-xs text-gray-400'}>{props.companyName}</p>
              </div>          
    </div>
          <p className={'mx-5 text-xs sm:text-sm sm:pt-6 pt-2 text-gray-400'}>{props.line1}</p>
          <p className={'mx-5 text-xs sm:text-sm text-gray-400'}>{props.line2}</p>
          <p className={'mx-5 text-xs sm:text-sm text-gray-400'}>{props.line3}</p>
          <p className={'mx-5 text-xs sm:text-sm text-gray-400 '}>{props.line4}</p>
    </div>
  )
}

export default CustomerReview
