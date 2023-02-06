import React, { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'

const Service = () => {
  const theory = useRef(null)

  useEffect(()=>{
    Lottie.loadAnimation({
      container:theory.current,
      renderer:'svg',
      loop:true,
      autoplay:true,
      animationData:require('../../assets/Theory.json')
      
  })
  return () => Lottie.destroy();
  },[])
  return (
    <div name='service' className='w-full h-96 bg-red-400 flex justify-around'>
        <div className='w-56 bg-green-200 flex flex-col item-center'>
             <h1 className='text-2xl'>Theory</h1>
             <div className='w-full flex justify-center item-center bg-red-200' ref={theory}></div>
        </div>

        <div className='w-56 bg-green-200'>
        <h1 className='text-2xl'>Practical</h1>

        </div>

        <div className='w-56 bg-green-200'>
        <h1 className='text-2xl'>Life Lesson</h1>

        </div>
 
    </div>
  )
}

export default Service