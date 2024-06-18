import Banner from '../components/Banner'
import Cards from '../components/Cards/Cards'
import { useState, useEffect } from 'react'
import loader from '../assets/loader.svg'

export default function Home() {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(data => setVideos(data))

    fetch('http://localhost:3000/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
  }, [])

  return (
    <main className='pb-[50px] md:pt-[125px] flex-grow'>
      {videos.length > 0 && categorias.length > 0
        ? <>
          <Banner videosData={videos} categorias={categorias} />
          <Cards videosData={videos} categorias={categorias} />
        </>
        : <div className='flex flex-col gap-12 justify-center items-center h-full text-4xl text-white'>
          <h1>Cargando videos...</h1>
          <img src={loader} alt='Loader' className='h-1/6' />
        </div>}

    </main>
  )
}
