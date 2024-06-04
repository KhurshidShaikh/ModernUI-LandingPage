import React from 'react'
import styles from '../style'
import { arrowUp } from '../../assets'
const GetStarted = () => {
  return (
    <div className={`bg-blue-gradient w-[130px] h-[130px] rounded-full p-[3px] ${styles.flexCenter} 
    cursor-pointer`}>
      <div className={`${styles.flexCenter} bg-primary w-[100%]  h-[100%] rounded-full flex-col font-poppins 
       font-semibold`}>
       <div className={`${styles.flexStart} flex-row`}>
         <span className='text-gradient mr-1'> Get</span>
         <img src={arrowUp} alt="arrow" />
       </div>
       <span className='text-gradient'>Started</span>
      </div>
      
    </div>
  )
}

export default GetStarted
