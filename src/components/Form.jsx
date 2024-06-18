import Select from 'react-select'
import categorias from '../../db.json'
import { useState } from 'react'

const options = categorias.categorias.map(categoria => ({
  value: categoria.categoria,
  label: categoria.categoria
}))

export default function Form() {
  const [nuevoVideo, setNuevoVideo] = useState({
    titulo: '',
    descripcion: '',
    imagen: '',
    video: '',
    categoria: ''
  })

  const [errores, setErrores] = useState({})

  const INPUT_STYLES = (name) => {
    return `border-[3px] focus:outline-none focus:border-current ${errores[name] ? 'border-[#E53935] hover:border-[#E53935] input-error' : 'border-[#262626] hover:border-[#ccc]'}  rounded-lg bg-transparent p-2 mt-3`
  }

  const SELECT_STYLES = {
    control: (base) => ({
      ...base,
      backgroundColor: 'transparent',
      borderRadius: '8px',
      border: `3px solid ${errores.categoria ? '#E53935' : '#262626'} `,
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
      color: 'white'
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
      console.log('Formulario enviado')
      handleClear(e)
    }
  }

  return (
    <form action='' className='mt-8 w-[80%]  mx-auto'>
      <h3 className='text-xl font-bold border-y-4 border-[#262626] py-4'>Crear Tarjeta</h3>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='flex flex-col w-full md:w-[60%]'>
          <label htmlFor='titulo' className={`mt-4 ${errores.titulo ? 'text-[#E53935]' : 'text-white'}`}>Título</label>
          <input
            type='text' id='titulo' name='titulo' value={nuevoVideo.titulo} onChange={handleChange}
            placeholder={errores.titulo ? errores.titulo : 'Ingrese el título'}
            className={`w-full ${INPUT_STYLES('titulo')}`}
          />
        </div>
        <div className='flex flex-col w-full md:w-[60%]'>
          <label htmlFor='categoria' className={`mt-4 ${errores.categoria ? 'text-[#E53935]' : 'text-white'}`}>Categoría</label>
          <Select
            name='categoria'
            value={options.find(option => option.value === nuevoVideo.categoria) || ''}
            onChange={handleSelectChange}
            placeholder={errores.categoria ? errores.categoria : 'Seleccione una categoría'}
            options={options} className='w-full mt-3'
            styles={SELECT_STYLES}
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 w-full mt-4'>
        <div className='flex flex-col w-full md:w-[50%]'>
          <label htmlFor='imagen' className={`mt-4 ${errores.imagen ? 'text-[#E53935]' : 'text-white'}`}>Imagen</label>
          <input
            type='text' id='imagen' name='imagen' value={nuevoVideo.imagen} onChange={handleChange}
            placeholder={errores.imagen ? errores.imagen : 'Ingrese el enlace de la imagen'}
            className={`w-full ${INPUT_STYLES('imagen')}`}
          />
        </div>
        <div className='flex flex-col w-full md:w-[50%]'>
          <label htmlFor='video' className={`mt-4 ${errores.video ? 'text-[#E53935]' : 'text-white'}`}>Video</label>
          <input
            id='video' name='video' value={nuevoVideo.video} onChange={handleChange}
            placeholder={errores.video ? errores.video : 'Ingrese el enlace del video'}
            className={`w-full ${INPUT_STYLES('video')}`}
          />
        </div>
      </div>

      <div className='flex flex-col w-full mt-8'>
        <label htmlFor='descripcion' className={errores.descripcion ? 'text-[#E53935]' : 'text-white'}>Descripción</label>
        <textarea
          value={nuevoVideo.descripcion} name='descripcion' id='descripcion' onChange={handleChange} cols='20' rows='7'
          placeholder={errores.descripcion ? errores.descripcion : '¿De qué trata el video?'}
          className={`w-full md:w-[70%] ${INPUT_STYLES('descripcion')}`}
        />
      </div>

      <div className='flex flex-col items-center md:items-start md:flex-row gap-6 mt-8 pb-[120px] md:pb-6'>
        <button
          onClick={handleSubmit}
          className='px-6 py-2 w-[50%] md:w-[20%] border-[3px] border-[#2271D1] hover:border-[#376195] rounded-lg'
        >GUARDAR
        </button>
        <button
          onClick={handleClear}
          className='px-6 py-2 w-[50%] md:w-[20%] border-[3px] border-[#F5F5F5] hover:border-[#9a9a9a] rounded-lg'
        >LIMPIAR
        </button>
      </div>

    </form>
  )
}
