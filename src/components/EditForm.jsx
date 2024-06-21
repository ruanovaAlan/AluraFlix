import Select from 'react-select'
import InputForm from './InputForm.jsx'
import categorias from '../../db.json'
import { useState, useContext } from 'react'
import { VideosContext } from '../context/videosContext'
import { useNavigate } from 'react-router-dom'
import { validateForm, clearForm, SELECT_STYLES } from '../utils/index.js'

const options = categorias.categorias.map(categoria => ({
  value: categoria.categoria,
  label: categoria.categoria
}))

export default function Form({ video, onClose }) {
  const [nuevoVideo, setNuevoVideo] = useState(video)
  const [errores, setErrores] = useState({})
  const { setVideos } = useContext(VideosContext)

  const navigate = useNavigate()

  const TEXTAREA_STYLES = (name) => {
    return `border-[3px] text-white text-sm focus:outline-none focus:border-current ${errores[name] ? 'border-[#E53935] hover:border-[#E53935] input-error' : 'border-[#2271D1] hover:border-[#ccc]'}  rounded-lg bg-transparent p-2 mt-2`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNuevoVideo((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (selectedCategory) => {
    setNuevoVideo({ ...nuevoVideo, categoria: selectedCategory.value })
  }

  const handleClear = (e) => {
    e.preventDefault()
    clearForm(setNuevoVideo)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const validationErrors = validateForm(nuevoVideo)

  //   setErrores(validationErrors)

  //   if (Object.keys(validationErrors).length === 0) {
  //     fetch(`https://alura-flix-api-one.vercel.app/videos/${video.id}`, {
  //       method: 'PUT',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(nuevoVideo)
  //     }).then(res => res.json())
  //       .then(data => {
  //         onClose(null)
  //         setVideos(prevVideos => prevVideos.map(v => v.id === video.id ? { ...v, ...data } : v))
  //       })
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm(nuevoVideo)

    setErrores(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`https://my-json-server.typicode.com/ruanovaAlan/alura-flix-api/videos/${video.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nuevoVideo)
        })
        const data = await response.json()
        onClose(null)
        setVideos(prevVideos => prevVideos.map(v => v.id === video.id ? { ...v, ...data } : v))
      } catch (error) {
        console.error('Error updating video:', error)
      }
    }
  }

  return (
    <form action='' className='mt-3 w-[95%] md:w-[80%]  mx-auto'>

      <div className='flex flex-col gap-4 w-full'>
        <InputForm name='titulo' type='text' errores={errores} nuevoVideo={nuevoVideo.titulo} handleChange={handleChange} placeholder='Ingrese el título' edit />
        <div className='flex flex-col w-full '>
          <label htmlFor='categoria' className={`${errores.categoria ? 'text-[#E53935]' : 'text-white'}`}>Categoría</label>
          <Select
            name='categoria'
            value={options.find(option => option.value === nuevoVideo.categoria) || ''}
            onChange={handleSelectChange}
            placeholder={errores.categoria ? errores.categoria : 'Seleccione una categoría'}
            options={options} className='w-full mt-3'
            styles={SELECT_STYLES(errores, true)}
          />
        </div>
      </div>

      <div className='flex flex-col gap-4 w-full mt-2'>
        <InputForm name='imagen' type='url' errores={errores} nuevoVideo={nuevoVideo.imagen} handleChange={handleChange} placeholder='Ingrese el enlace de la imagen' edit />
        <InputForm name='video' type='url' errores={errores} nuevoVideo={nuevoVideo.video} handleChange={handleChange} placeholder='Ingrese el enlace del video' edit />
      </div>

      <div className='flex flex-col w-full mt-2'>
        <label htmlFor='descripcion' className={`mt-2 ${errores.descripcion ? 'text-[#E53935]' : 'text-white'}`}>Descripción</label>
        <textarea
          value={nuevoVideo.descripcion} name='descripcion' id='descripcion' onChange={handleChange} cols='20' rows='3'
          placeholder={errores.descripcion ? errores.descripcion : '¿De qué trata el video?'}
          className={`w-full ${TEXTAREA_STYLES('descripcion')}`}
        />
      </div>

      <div className='flex  items-center justify-between flex-row gap-3 mt-6  md:pb-6'>
        <button
          onClick={handleSubmit}
          className='px-6 md:px-8 py-2 md:py-3 text-sm text-[#2271D1] bg-black shadow-custom font-bold border-[3px] border-[#2271D1] hover:border-[#376195] rounded-lg'
        >GUARDAR
        </button>
        <button
          onClick={handleClear}
          className='px-8 py-2 md:py-3 text-sm text-white font-bold border-[3px] border-[#F5F5F5] hover:border-[#9a9a9a] rounded-lg'
        >LIMPIAR
        </button>
      </div>

    </form>
  )
}
