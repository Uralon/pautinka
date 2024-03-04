import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Banner, Footer, Catalog } from './components'
import {Routes, Route} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
