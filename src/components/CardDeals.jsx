import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'
import { card } from '../../assets'
const CardDeals = () => {
  return (
    <section className={layout.section} >
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} `}>
        Find a better card deal in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus distinctio reiciendis.
      </p>

      <Button/>
    </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

  </section>
  )
}

export default CardDeals
