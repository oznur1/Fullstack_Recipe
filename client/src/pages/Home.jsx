import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import api from '../api';
import Card from '../components/Card';
import Search from '../components/Search';
import Sort from '../components/Sort';
import {useDebounce} from "@uidotdev/usehooks";


const Home = () => {

  //arama
  const [searchTerm,setSearchTerm]=useState("")


  //sıralama
    const [order,setOrder]=useState(null)

    const debouncedTerm = useDebounce(searchTerm, 500);

//api'a gönderilecek parametreler
const params={
  order,
 search: debouncedTerm,
}

    // api'dan tarif verilerini al
  const { isLoading, error, data} = useQuery({
    queryKey: ["recipes", order,searchTerm, debouncedTerm],
    queryFn: () =>
      api.get("/api/v1/recipes", { params }).then((res) => res.data.recipes),
  });



  return (
<main className='overflow-y-auto'>
  <Search setSearchTerm={setSearchTerm}/>

 <section className='p-4'>
    {isLoading ?(
      "LOADER"
    ):error? (
      "ERROR"
    ):(
      <>
        <div className='flex justify-between items-center'>
          <h1 className='text-3xl my-5'>
      <p>{data ? data.length : 0} tarif bulundu</p>
          </h1>  
          
          <Sort setOrder={setOrder}/>
           </div>
        
      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {data.map((i)=>( 
          <Card key={i.id} recipe={i}/>
        ))}
      </div>
      </>
    )
  
  
  }  
      </section>
    </main>
  )
}

export default Home
