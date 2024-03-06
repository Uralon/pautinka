import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



const UsersPage = () => {

    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        setUsers(users)
    }
    useEffect(() => {
        fetchUsers();
    }, [])

  const[query,setQuery]=useState("");
  const searchUser = users.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase()))




    return (
        <section>
            <div className="container">
                <h2 className='text-3xl text-bold'>Пользователи:</h2>
                <div className="flex items-center justify-start"><p>Поиск пользователя</p><input type="search" placeholder='Имя' onChange={(e) => setQuery(e.target.value)} className='text-black border-2 border-black px-2 py-1 mt-4' /></div>
                <ul>
                    {
                        searchUser.map((user) => {
                            return (
                                <li>{user.name}</li>
                            )
                        })
                    }
                </ul>
                <Link className='text-3xl mt-8 inline-block hover:text-red-500' to="/create">Создать пользователя</Link>
            </div>

        </section>
    )
}

export default UsersPage