import { useParams } from 'react-router-dom'
import React from 'react'
import { products } from '../../database';
import { man } from '../../assets';

const CardPage = () => {
    const { id } = useParams();
    const product = products.find(products => products.id === parseInt(id))
    return (
        <div>
            <section>
                <div className="container flex gap-5 pt-20">
                <img src={man} alt="" />
                    <div className="flex">
                        <p>{product.name}</p>
                    </div>
                    <p>{product.price}</p>
                    <a href="/catalog" className='mt-20'>Назад</a>
                </div>

            </section>
        </div>
    )
}

export default CardPage