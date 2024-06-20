import Select from 'react-select'
import categorias from '../../db.json'
import { useState, useContext } from 'react'
import { VideosContext } from '../context/videosContext'
import { useNavigate } from 'react-router-dom'

const options = categorias.categorias.map(categoria => ({
  value: categoria.categoria,
  label: categoria.categoria
}))

export default function Form({ video, onClose }) {
  const [nuevoVideo, setNuevoVideo] = useState(video)

  const [errores, setErrores] = useState({})

  const navigate = useNavigate()

  const INPUT_STYLES = (name) => {
    return `border-[3px] text-[#A5A5A5] text-sm focus:outline-none focus:border-current ${errores[name] ? 'border-[#E53935] hover:border-[#E53935] input-error' : 'border-[#2271D1] hover:border-[#ccc]'}  rounded-lg bg-transparent p-2 mt-2`
  }

  const SELECT_STYLES = {
    control: (base) => ({
      ...base,
      backgroundColor: 'transparent',
      borderRadius: '8px',
      border: `3px solid ${errores.categoria ? '#E53935' : '#2271D1'} `,
      boxShadow: 'none',
      '&:hover': {
        border: `3px solid ${errores.categoria ? '#E53935' : '#ccc'} `
      },
      height: '44px'
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: '#262626'
    }),
    option: (base, { isFocused }) => ({
      ...base,
      backgroundColor: isFocused ? '#393535' : 'transparent',
      color: 'white',
      borderRadius: '8px'
    }),
    singleValue: (base) => ({
      ...base,
      color: '#A5A5A5'
    }),
    placeholder: (base) => ({
      ...base,
      color: errores.categoria ? '#E53935' : '#A5A5A5'
    })
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
    setNuevoVideo({
      titulo: '',
      descripcion: '',
      imagen: '',
      video: '',
      categoria: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

    Object.entries(nuevoVideo).forEach(([key, value]) => {
      if (!value.trim()) {
        validationErrors[key] = `El campo ${key} es obligatorio`
      }
    })
    setErrores(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      fetch(`http://localhost:3000/videos/${video.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoVideo)
      }).then(res => res.json())
        .then(onClose(null))
    }
  }

  return (
    <form action='' className='mt-3 w-[95%] md:w-[80%]  mx-auto'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='flex flex-col w-full'>
          <label htmlFor='titulo' className={`mt-2 ${errores.titulo ? 'text-[#E53935]' : 'text-white'}`}>Título</label>
          <input
            type='text' id='titulo' name='titulo' value={nuevoVideo.titulo} onChange={handleChange}
            placeholder={errores.titulo ? errores.titulo : 'Ingrese el título'}
            className={`w-full ${INPUT_STYLES('titulo')}`}
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='categoria' className={`mt-2 ${errores.categoria ? 'text-[#E53935]' : 'text-white'}`}>Categoría</label>
          <Select
            name='categoria'
            value={options.find(option => option.value === nuevoVideo.categoria) || ''}
            onChange={handleSelectChange}
            placeholder={errores.categoria ? errores.categoria : 'Seleccione una categoría'}
            options={options} className='w-full mt-2'
            styles={SELECT_STYLES}
          />
        </div>
      </div>

      <div className='flex flex-col gap-4 w-full mt-2'>
        <div className='flex flex-col w-full'>
          <label htmlFor='imagen' className={`mt-2 ${errores.imagen ? 'text-[#E53935]' : 'text-white'}`}>Imagen</label>
          <input
            type='text' id='imagen' name='imagen' value={nuevoVideo.imagen} onChange={handleChange}
            placeholder={errores.imagen ? errores.imagen : 'Ingrese el enlace de la imagen'}
            className={`w-full ${INPUT_STYLES('imagen')}`}
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='video' className={`mt-2 ${errores.video ? 'text-[#E53935]' : 'text-white'}`}>Video</label>
          <input
            id='video' name='video' value={nuevoVideo.video} onChange={handleChange}
            placeholder={errores.video ? errores.video : 'Ingrese el enlace del video'}
            className={`w-full ${INPUT_STYLES('video')}`}
          />
        </div>
      </div>

      <div className='flex flex-col w-full mt-2'>
        <label htmlFor='descripcion' className={`mt-2 ${errores.descripcion ? 'text-[#E53935]' : 'text-white'}`}>Descripción</label>
        <textarea
          value={nuevoVideo.descripcion} name='descripcion' id='descripcion' onChange={handleChange} cols='20' rows='2'
          placeholder={errores.descripcion ? errores.descripcion : '¿De qué trata el video?'}
          className={`w-full ${INPUT_STYLES('descripcion')}`}
        />
      </div>

      <div className='flex flex-col items-center justify-between md:flex-row gap-3 mt-6 pb-[120px] md:pb-6'>
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
