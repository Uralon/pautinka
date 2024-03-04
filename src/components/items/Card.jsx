import React from 'react'
import {products} from '../../database'
import { add, like, man } from '../../assets'
import { Link } from 'react-router-dom'

export default function Card({ name, price,id }) {
    return (
        <div>
            <div className="card max-w-[385px] text-black">
                <img src={man} alt="1" />
                <p className='text-3xl text-black py-2 px-4'>{name}</p>
                <div className="flex justify-between p-4">
                    <p className='text-black text-3xl'>{price} ₽</p>
                    <div className="flex">
                        <img src={like} alt="1" />
                        <img src={add} alt="1" />
                    </div>
                </div>
                    <Link to={`${id}`}>Точнее пожалуйста</Link>
            </div>
        </div>
    )
}
