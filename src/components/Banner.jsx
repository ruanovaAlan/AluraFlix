export default function Banner({ videosData, categorias }) {
  const getRandomIndex = (max) => Math.floor(Math.random() * max)
  const randomIndex = getRandomIndex(videosData.length)
  const video = videosData[randomIndex]
  const color = categorias.find(categoria => categoria.categoria === video.categoria).color

  return (
    <section className='hidden md:flex md:bg-banner md:h-[530px] text-white'>
      <div className='flex w-full h-full bg-[rgba(0,0,0,0.6)]'>
        <div className='flex flex-col justify-center ps-8 w-1/2 h-full'>
          <h1
            style={{ backgroundColor: color }}
            className='w-[40%] p-2 mb-6 rounded-lg text-center text-3xl font-bold'
          >{video.categoria.toUpperCase()}
          </h1>
          <h2 className='w-[95%] text-2xl mb-2'>{video.titulo}</h2>
          <p className='text-sm line-clamp-6'>{video.descripcion}</p>
        </div>
        <div className='flex justify-center items-center  w-1/2 h-full'>
          <a
            href={video.video} target='_blank' rel='noreferrer'
            className='w-[80%] h-[50%] rounded-xl shadow-custom'
            style={
              {
                background: `url(${video.imagen})  lightgray 50% / cover no-repeat`,
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
