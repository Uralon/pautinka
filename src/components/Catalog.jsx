import React from 'react'

const Catalog = () => {
  return (
    <section className='bg-white min-h-[80vh]'>
      <div className='container '>
        <div className='pt-[23px]'>
          <div className='flex items-center gap-[11px]'>
            <a href="/" className='text-xl text-black'>Главная</a>
            <div className='text-xl text-black'>\</div>
            <a href="/catalog" className='text-xl text-black'>Каталог</a>
          </div>
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
            <ul className='catalog-list'>

            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog