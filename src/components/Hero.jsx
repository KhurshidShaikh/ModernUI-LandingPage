import React from 'react'
import styles from '../style'
import { discount,robot } from '../../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0
    sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4
      bg-discount-gradient rounded-[10px] mb-2'>
        <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
         <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20 % Discount for 1 month account</span>
         </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-semibold font-poppins text-white text-[52px]
        ss:text-[72px] ss:leading-[100px] leading-[75px]'>
          The Next   <br  className='sm:block hidden'/> {" "}
          <span className='text-gradient'>Generation</span> {" "}
        </h1>
        <div className=' ss:flex hidden md:mr-4 mr-0'>
       <GetStarted/>
      </div>
      </div>
          
          <h1 className='flex-1 font-semibold font-poppins text-white text-[52px]
        ss:text-[72px] ss:leading-[100px] leading-[75px]'> Payment Method.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          our team of experts uses a methodology to indentify the credit cards 
          most likely to fit your needs. we examine annual percentage rates,annual fees.

        </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt="robot"  className='w-[100%] h-[100%] relative z-[5]'/>

      <div className='absolute z-[0] top-0 w-[40%] h-[35%] pink__gradient'/>
      <div className='absolute z-[1] bottom-40  w-[30%] h-[80%]  white__gradient rounded-full'/>
      <div className='absolute z-[0] w-[50%] h-[50%] blue__gradient right-20 bottom-20'/>
    </div>
      
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>

      </div>

  </section>

)

export default Hero
