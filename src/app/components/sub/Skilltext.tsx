"use client"
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

function Skilltext() {
  return (
    <>
    <div className="w-full h-auto flex flex-col items-center justify-center">
    <motion.div
 variants={slideInFromTop}
 className='Welcome-box py-[8px] px-[7px] border border-purple-700 opacity-[0.9]'
 >
    <SparklesIcon className =" text-purple-400 mr-[10px] h-5 w-5"/>
    <h1 className='Welcome-text text-[13px] '>Think Better With Nextjs 14</h1>
   </motion.div>
   <motion.div
   variants={slideInFromLeft(0.5)}
   className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
   >
Making Apps With Modern Technologies
   </motion.div>
   <motion.div
   variants={slideInFromRight(0.5)}
   className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
   >
    Never Miss A Task Deadline Or Idea

   </motion.div>

    </div>
    </>
  )
}

export default Skilltext