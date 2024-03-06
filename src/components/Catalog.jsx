import React, { useState } from 'react'
import Card from './items/Card'
import { products } from '../database'
import { Link } from 'react-router-dom';

export default function Catalog() {

  const[query,setQuery]=useState("");

  const searchProduct = products.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <section className='bg-white min-h-[80vh]'>
      <div className='container '>
        <div className='pt-[23px]'>
          <div className='flex items-center gap-[11px]'>
            <Link to='/' className='text-xl text-black'>Главная</Link>
            <div className='text-xl text-black'>\</div>
            <Link to='/catalog' className='text-xl text-black'>Каталог</Link>
          </div>
          <input type="search" placeholder='Find' onChange={(e) => setQuery(e.target.value)} className='text-black border-2 border-black px-2 py-1 mt-4' />
        </div>
        <div className='flex justify-center items-center pt-[44px]'>
          <ul className='flex items-center gap-5'>
            <li><a href="#" className='catalog__filter-item active'>Всё</a></li>
            <li><a href="#" className='catalog__filter-item'>Топ</a></li>
            <li><a href="#" className='catalog__filter-item'>Низ</a></li>
            <li><a href="#" className='catalog__filter-item'>Обувь</a></li>
          </ul>
        </div>
        <div>
          <div className='my-20'>
            <ul className='catalog-list flex flex-wrap gap-20'>
              {
                searchProduct.length ?
                searchProduct.map((product, index) => (
                  <Card key={index} {...product} />
                ))
                :
                <p>По вашему запросу "{query}" ничего не найдено </p>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

