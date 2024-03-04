import React from 'react'
import { logo } from '../assets'

const Footer = () => {
  return (
    <div className='flex justify-between items-center container mt-2'>
      <div className="header__left flex gap-5 items-center">
        <img src={logo} alt="logo" />
        <div className='bg-[#D9D9D9] w-[3px] h-[43px]' />
        <a className='uppercase hover:text-red-500' href="/">Главная</a>
        <a className='uppercase hover:text-red-500' href="/">Каталог</a>
        <div className='bg-[#D9D9D9] w-[3px] h-[43px]' />
        <a className='uppercase hover:text-red-500' href="/">информация</a>
      </div>
      <div className="header__right flex flex-col gap-1 uppercase py-[15px] items-center">
        <p>г. кАЗАНЬ, УЛ. бали галеева 3а </p>
        <p>+7 (927) 482-09-82</p>
        <p>Kuzmakolom@gMAIL.RU</p>
      </div>
    </div>
  )
}

export default Footer