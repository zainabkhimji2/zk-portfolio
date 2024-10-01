"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaLinkedin, FaRegHandshake } from 'react-icons/fa'
function Navbar() {
  return (
    <>
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10">
<div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
    <Link href="#about" className='h-auto w-auto flex flex-row items-center'>
    <Image
    src="/NavLogo.png"
    alt="logo"
    width={70}
    height={70}
    className='cursor-pointer rounded-full'
    />
    <span className='font-bold ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>Zainab Khimji</span>
    </Link>
<div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
    <div className='flex items-center w-full h-auto justify-between border border-purple-800 bg-slate-950 mr-[15px] px-[20px] py-[10px] rounded-full'>
<Link href="#about" className='cursor-pointer text-white'>About Me</Link>
<Link href="#skills" className='cursor-pointer text-white'>Skills</Link>

    </div>
</div>

<div className='flex flex-row gap-5'>
    <motion.a
    href="https://www.instagram.com/zk_coding/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-pink-500 animate-pulse"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaInstagram size={30} />
  </motion.a>
  <motion.a
    href="https://www.linkedin.com/in/zainab-khimji-b54b67320/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-500 animate-pulse"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaLinkedin size={30} />
  </motion.a>
  <motion.a
    href="https://www.upwork.com/freelancers/~01a0843f7cdb18d9ba?viewMode=1"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-green-500 animate-pulse"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaRegHandshake size={30} />
  </motion.a>
  <motion.a
    href="https://github.com/zainabkhimji2"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-gray-300 animate-pulse"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaGithub size={30} />
  </motion.a>

</div>
</div>
    </div>
    </>
  )
}

export default Navbar