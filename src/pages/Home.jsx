import Banner from '../components/Banner'
import Cards from '../components/Cards/Cards'
import loader from '../assets/loader.svg'
import useFetchData from '../hooks/useFetchData'

export default function Home() {
  const { videos, categorias } = useFetchData()

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
