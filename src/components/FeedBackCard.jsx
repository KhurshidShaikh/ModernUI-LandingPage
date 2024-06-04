import React from 'react'
import { quotes } from '../../assets'

const FeedBackCard = ({id,content,name,title,img}) => {
  return (
    <div className='flex flex-col rounded-[20px] px-10 py-12 justify-between 
    max-w-[370px] md:mr-2 sm:mr-2  mr-0  my-5  feedback-card'>
     <img src={quotes} alt="quotes" className='object-contain w-[40px] h-[27px]' />
     <p className='text-white font-poppins font-normal text-[18px] leading-[32px] my-10'>
      {content}
      </p>
      <div className='flex flex-row'>
        <img src={img} alt="peopleimg w-[48px] h-[48px] rounded-full" />
         
         <div className='flex flex-col ml-7' >
          <h4 className='text-white font-poppins font-semibold text-[20px]'>{name}</h4>
          <p  className='text-dimWhite font-poppins font-normal text-[16px] leading-[32px]'>
            {title}
            </p>
         </div>
      </div>
    </div>
  )
}

export default FeedBackCard
