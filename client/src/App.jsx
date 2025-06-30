import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Update from './pages/Update'
import Undefined from './pages/Undefined'
import Create from './pages/Create'
import Sidebar from './components/sidebar'

const App = () => {
  return (

    <BrowserRouter>
    <div className='flex'>  
    <Sidebar/>
    <div className='flex-1 bg-gray-200'>  
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tarif/:id' element={<Detail/>}/>
      <Route path='/düzenle' element={<Update/>}/>
       <Route path='/*' element={<Undefined/>}/>
      <Route path='/ekle' element={<Create/>}/>
    </Routes>
    </div>
     </div>
    </BrowserRouter>
    
  )
}

export default App
