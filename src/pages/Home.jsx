import Banner from '../components/Banner'
import Cards from '../components/Cards/Cards'
import useFetchData from '../hooks/useFetchData'
import useDeleteVideo from '../hooks/useDeleteVideo'

export default function Home() {
  const { videos, categorias, setVideos } = useFetchData()
  const handleDelete = useDeleteVideo(setVideos)

  return (
    <main className='pb-[50px] md:pt-[125px] flex-grow'>
      {videos.length > 0 && categorias.length > 0
        ? <>
          <Banner videosData={videos} categorias={categorias} />
          <Cards videosData={videos} categorias={categorias} onDelete={handleDelete} />
        </>
        : <div className='flex flex-col gap-12 justify-center items-center h-full text-4xl text-white'>
          <h1>No hay videos para mostrar</h1>
        </div>}

    </main>
  )
}
