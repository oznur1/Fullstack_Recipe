import React, { Children } from 'react'

const Create = () => {
  return (
    <div>
    <h1 className=' text-red-500 font-semibold text-3xl '>Yeni Tarif Oluştur</h1>
     

     <form className='my-10 flex flex-col gap-10 max-w-2xl mx-auto'>
      
    <Field label="Başlık"> 
   <input type="text" className='rounded-md p-2 focus:outline-red-400' />
   </Field>

    <Field label="Kategori">
     <input type="text" className='rounded-md p-2 focus:outline-red-400' />
     </Field>
    
     </form>
    </div>
  )
}

const Field=({children,label})=>{
  return(
    <div className='flex flex-col gap-2'>
      <label>{label}</label>

      {children}
    </div>
  )
}

export default Create
