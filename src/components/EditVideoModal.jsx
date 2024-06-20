import { useContext } from 'react'
import { VideosContext } from '../context/videosContext'
import cerrarIcon from '../assets/close.png'
import EditForm from './EditForm'

export default function EditVideoModal({ video }) {
  const { selectedVideo, setSelectedVideo } = useContext(VideosContext)

  return (
    <>
      {
        selectedVideo &&
        <div className='fixed top-0 bottom-0 right-0 left-0 bg-[#03122FC2]'>
          <dialog
            open={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
            className='flex flex-col justify-between items-center max-h-[95%] w-[90%] md:w-[50%] bg-[#03122F]
            top-[5%] md:top-[5%] rounded-xl shrink-0 overflow-y-auto px-2 md:px-14 py-10 border-[5px] border-[#6BD1FF]'
          >
            <h1 className='text-[#2271D1] text-2xl md:text-4xl font-bold'>EDITAR CARD:</h1>
            <form method='dialog'>
              <button formMethod='dialog' className='absolute size-10 top-4 right-6'>
                <img src={cerrarIcon} alt='Ícono de cerrar' />
              </button>
            </form>
            <EditForm video={selectedVideo} onClose={setSelectedVideo} />
          </dialog>
        </div>
      }
    </>
  )
}
