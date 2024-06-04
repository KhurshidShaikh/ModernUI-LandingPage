import React from 'react'
import { logo } from '../../assets'
import { footerLinks,socialMedia } from '../constants'
import styles from '../style'

const Footer = () => {
  return (
   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>

      <div className='flex flex-col justify-start flex-1 mr-10'>
        <img src={logo} alt="logo" className='w-[220px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} max-w-[310px] mt-5`}>
          A new way to make payments easy,reliable & secure.
        </p>
      </div>
       
     <div className='flex-[1.5] flex flex-row w-full justify-between flex-wrap mt-10 md:mt-0'>
     

       {footerLinks.map((footerlink,index)=>(
         <div key={index} className='flex flex-col mx-3 my-3'>
           <h4 className='text-white font-poppins font-semibold text-[18px] leading-[27px]'>{footerlink.title}</h4>
           <ul>
            {footerlink.links.map((link)=>(
              <li key={link.name} className='list-none text-dimWhite leading-[23px]
              font-normal font-poppins text-[16px] hover:text-secondary cursor-pointer my-1'>
                {link.name}
              </li>
            ))}
            </ul>
          </div>
       ))}
     </div>

    </div>

   <div className='flex flex-col justify-between items-center w-full md:flex-row pt-6'>
    <p className='text-white font-poppins font-normal text-[18px] leading-[27px]'>
      2021 HooBank. All Rights Reserved
    </p>
    <div className='flex flex-row mt-6 md:mt-0'>
      {socialMedia.map((social,index)=>(
        <img 
        src={social.icon}
        key={social.id}
        className={`w-[21px] h-[21px] object-contain ${index!==socialMedia.length-1?'mr-6':'mr-0'} `}
        />
      ))}
    </div>
   </div>
   </section>
  )
}

export default Footer
