import borrar from '../../assets/borrar.png'
import editar from '../../assets/editar.png'
import { useContext } from 'react'
import { VideosContext } from '../../context/videosContext'

const buttonStyling = 'flex items-center gap-3 hover:text-gray-300'

export default function Card({ video, color, onDelete }) {
  const { setSelectedVideo } = useContext(VideosContext)

  const handleDelete = () => {
    onDelete(video.id)
  }

  const handleEdit = () => {
    setSelectedVideo(video)
  }

  return (
    <div className='min-w-[100%] md:min-w-[30%] md:w-[19rem] h-[15rem] mb-5'>
      <a
        href={video.video}
        target='_blank'
        className='h-[80%] w-full block rounded-t-xl'
        style={{
          background: `url(${video.imagen}) no-repeat center center / cover, lightgray`,
          border: `5px solid ${color}`,
          boxShadow: `0px 0px 17px 8px ${color} inset`
        }} rel='noreferrer'
      />
      <div
        style={{
          borderTop: '0px solid transparent',
          borderRight: `5px solid ${color}`,
          borderBottom: `5px solid ${color}`,
          borderLeft: `5px solid ${color}`
        }}
        className='flex justify-around items-center h-[20%] w-full font-bold text-sm text-white bg-black rounded-b-xl'
      >
        <button className={buttonStyling} onClick={handleDelete}>
          <img className='w-[1.5rem]' src={borrar} alt='' />
          <span>BORRAR</span>
        </button>
        <button className={buttonStyling} onClick={handleEdit}>
          <img className='w-[1.5rem]' src={editar} alt='' />
          <span>EDITAR</span>
        </button>
      </div>
    </div>
  )
}
