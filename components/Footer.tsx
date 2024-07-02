import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Vamos para<span className='text-purple'> outro  </span>  nivel
            </h1>
            <p className='text-whit-200 md:mt-10 my-5 text-center'>Entre em contato comigo para discutir como posso ajudá-lo a alcançar seus objetivos</p>
            <a href="mailto:guilhermerisson99@gmail.com">
                <MagicButton 
                title='Entre em contato'
                icon={<FaLocationArrow/>}
                position="right"
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row md:flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-ligth'>Copyright © 2024 Guilherme Risson</p>
            
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rouded-lg border border-black-300'> 
                        <a href={profile.href} target='_blank'>
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </a>
                    </div>
                ))}

            </div>
        </div>
    </footer>
  )
}

export default Footer
