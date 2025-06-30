
import { links } from '../../constants'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {
  return (
    <div>
     <img src="/r_logo.jpg" alt="" className='max-w-[80px] md:max-w-[8-150px]'/>

     
     <nav>
     
     {links.map(i=>{
        <NavLink to={i.path}>
            <span>{i.icon}</span>
               <span>{i.title}</span>
        </NavLink>
     })}
     </nav>
    </div>
  )
}

export default Sidebar
