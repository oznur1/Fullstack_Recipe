import React from 'react'

const Sort = ({setOrder}) => {
  return (
    <div>
      <select className='rounded-md p-2'
      defaultValue=""
      onChange={(e)=>setOrder(e.target.value)}
      >
            <option value="" disabled>
              Süreye Göre
            </option>
            <option>Artan</option>
            <option>Azalan</option>
          </select>
    </div>
  )
}

export default Sort
