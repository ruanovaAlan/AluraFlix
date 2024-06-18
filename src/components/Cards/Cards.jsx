import Card from './Card'

export default function Cards({ videosData, categorias }) {
  return (
    <section className='mt-20 px-5'>
      {categorias.map((categoria, index) => (
        <div key={index}>
          <h2
            style={{ backgroundColor: categoria.color }}
            className='w-[60%] md:w-[25%] p-2 mb-6 rounded-lg text-center text-white text-2xl font-bold'
          >
            {categoria.categoria.toUpperCase()}
          </h2>
          <div
            className='flex md:justify-around overflow-x-auto space-x-4 mb-20
            scrollbar-thin scrollbar-thumb-[#2271D1] scrollbar-track-[#2271D12B]
            scrollbar-webkit'
          >
            {videosData
              .filter(video => video.categoria === categoria.categoria)
              .map((video) => (
                <Card key={video.id} video={video} color={categoria.color} />
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}
