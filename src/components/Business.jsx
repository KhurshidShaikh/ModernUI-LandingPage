import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'
import { features } from '../constants'


const FeatureCard=({icon,title,id,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[24px] ${index!==features.length-1?'mb-6':'mb-0'}
  feature-card`}>
 <div className={`w-[65px] h-[65px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
   <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`}/>
  </div>
  <div className='flex-1 flex-col ml-3'>
    <h4 className='font-poppins text-white font-semibold text-[18px] leading-7'>
      {title}
    </h4>
    <p className='font-poppins text-dimWhite font-normal text-[16px] leading-7'>
      {content}
    </p>
  </div>
  </div>
 
)

const Business = () => {
  return (
    <section className={layout.section} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the Business , <br className='hidden sm:block'/>
           we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          with the right credit card you can improve your financial life ,
          by building credit cards ,earning rewards and saving money.
          But with hundreds of credit cards on the market
        </p>

        <Button/>
      </div>
       
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}

      </div>


    </section>
  )
}

export default Business
