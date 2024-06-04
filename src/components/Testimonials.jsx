import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedBackCard from './FeedBackCard'
const Testimonials = () => {
  return (
   <section id= "clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* gradient */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
              <h2 className={styles.heading2}>
                What people are <br className='hidden sm:block'/> saying about us
              </h2>
              <div className='w-full md:mt-0 mt-6 '>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugiat repellat eius rerum, nostrum nihil!
                </p>
              </div>
    </div>

    <div  className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]'>
       {feedback.map((card)=>(
        <FeedBackCard key={card.id} {...card}/>
       ))}
    </div>
   </section >
  )
}

export default Testimonials
