
import { links } from '../../constants'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen justify-between items-center md:px-3 max-md:py-3 max-md:gap-20 max-md:justify-normal'>
     <img src="/r_logo.jpg" alt="" className='max-w-[80px] md:max-w-[8-150px]'/>

     
     <nav className='flex  flex-col gap-20'> 
     
     {links.map((i,key)=>( 
        <NavLink 
        key={key}
        className="flex gap-4 items-center text-lg text-gray-400"
        to={i.path}>
            <span className='max-md:text-2xl'>{i.icon}</span>
               <span className='max-md:hidden'>{i.title}</span>
        </NavLink>
     ))}
     </nav>
     <div className='flex flex-col gap-2 max-md:hidden'>
        <p className='font-semibold'>Günlük Haberleri al</p>
        <button className='bg-red-500 p-2 rounded-lg text-white hover:bg-red-400'>Abone Ol</button>
     </div>
    </div>
  )
}

export default Sidebar
