import React from 'react'
import { stats } from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
       {stats.map((stat,index)=>(
        <div key={index} className='flex flex-row items-center m-6 justify-start'>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px]
           text-white xs:leading-[53px] leading-[43px]'>
            {stat.value}</h4>
          <p className='font-poppins font-normal xs:text-[20px] text-[15px]
           text-gradient xs:leading-[26px] leading-[21px] uppercase'>{stat.title}</p>
        </div>

       ))}
    </section>
  )
}

export default Stats
