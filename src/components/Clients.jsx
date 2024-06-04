import React from 'react'
import { clients } from '../constants'
const Clients = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between my-7 items-center flex-1 flex-wrap' >
      {clients.map((client,index)=>(
        <img src={client.logo} key={index} alt="logo" className=' sm:w-[200px] w-[150px] h-[70px] object-contain' />
       
      ))}
   </div>
  )
}

export default Clients
