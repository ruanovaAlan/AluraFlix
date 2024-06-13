import videosData from '../../db.json'

export default function Banner() {
  const getRandomIndex = (max) => Math.floor(Math.random() * max)
  const randomIndex = getRandomIndex(videosData.videos.length)
  const video = videosData.videos[randomIndex]
  const color = videosData.categorias.find(categoria => categoria.categoria === video.categoria).color
  console.log(color)

  return (
    <section className='hidden md:flex md:bg-banner md:h-[530px] text-white'>
      <div className='flex w-full h-full bg-[rgba(0,0,0,0.6)]'>
        <div className='flex flex-col justify-center ps-8 w-1/2 h-full'>
          <h1
            style={{ backgroundColor: color }}
            className='w-2/4 p-2 mb-6 rounded-md text-center text-xl font-bold'
          >{video.categoria.toUpperCase()}
          </h1>
          <h2 className='w-[95%] text-lg mb-2'>{video.titulo}</h2>
          <p className='text-xs'>{video.descripcion}</p>
        </div>
        <div className='flex justify-center items-center  w-1/2 h-full'>
          <a
            href={video.link} target='_blank' rel='noreferrer'
            className='w-[80%] h-2/4 rounded-md shadow-custom'
            style={
              {
                background: `url(${video.capa})  lightgray 50% / cover no-repeat`,
                border: `3px solid ${color}`,
                boxShadow: `0px 0px 17px 8px ${color} inset`
              }
            }
          />
        </div>
      </div>
    </section>
  )
}
