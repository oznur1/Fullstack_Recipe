import { useQuery } from '@tanstack/react-query';
import { CiSearch } from "react-icons/ci";
import api from '../api';

const Home = () => {
  //apidan tarif verilerini al
   const { isLoading, error, data } = useQuery({
    queryKey: ["recipes"],
    queryFn: () =>
      api.get("/api/v1/recipes").then((res) => res.data.recipes),
  });

  return (
<main className='overflow-y-auto'>
<section className='bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center shadow-lg'>
  <CiSearch className='text-xl'/>

<input type="text" className='w-full outline-none text-zinc-700' />
</section>


 <section className='p-4'>
    {isLoading ?(
      "LOADER"
    ):error? (
      "ERROR"
    ):(
      <div>
        {data.map((i)=>( 
          <div>kart</div>
        ))}
      </div>
    )
  
  
  }  
      </section>
    </main>
  )
}

export default Home
