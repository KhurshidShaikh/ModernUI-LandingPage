import React from 'react'
import { apple,google,bill } from '../../assets'
import styles,{layout} from '../style'

const Billing = () => {
  return (
  <section id="product" className={layout.sectionReverse}>
   
   <div className={`${layout.sectionImgReverse}`}>
    <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />

    <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
    <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
   </div>

   <div className={layout.sectionInfo}>
    <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing</h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde sit provident soluta adipisci nulla ab tenetur tempore recusandae beatae.</p>

    <div className='flex flex-row flex-wrap  mt-6 sm:mt-10'>
      <img src={apple} alt="applestore" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5' />
      <img src={google} alt="playstore" className='w-[128px] h-[42px] object-contain cursor-pointer' />
    </div>
   </div>
  </section>
  )
}

export default Billing
