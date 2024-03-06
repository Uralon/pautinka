import React, { useState } from 'react'

const CreatePage = () => {

    const [message, setMessage] = useState('');

    function createPost(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })

        event.target.reset()
        setMessage('Форма отправлена')
    }

    return (
        <section>
            <div className="container text-center">
                <h1>Создание новости/пользователя</h1>

                <form onSubmit={createPost} className='flex flex-col gap-5 items-center justify-center'>
                    <input type="text" className='text-black' name="title" placeholder="Название" />
                    <textarea name="body" cols="30" rows="10" className='text-black'></textarea>
                    <button type='submit'>Добавить</button>
                    {message}
                </form>
            </div>
        </section>
    )
}

export default CreatePage