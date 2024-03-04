import React from 'react'
import { banner, logo_banner } from '../assets'

const Banner = () => {
  return (
    <section className='banner'>
      <div className='container pt-[138px] flex flex-col items-center justify-center gap-7'>
        <img className='max-w-[687px] w-full mx-auto ' src={logo_banner} alt="logo" />
        <h1 className='mx-auto text-4xl uppercase'>Бренд одежды</h1>
        <a href='/catalog' className="button mx-auto">Перейти в категории</a>
      </div>
    </section>
  )
}

export default Banner