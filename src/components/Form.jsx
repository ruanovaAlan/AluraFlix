import Select from 'react-select'
import categorias from '../../db.json'
import InputForm from './InputForm.jsx'
import ButtonForm from './ButtonForm.jsx'
import { useState, useContext } from 'react'
import { VideosContext } from '../context/videosContext'
import { useNavigate } from 'react-router-dom'
import { validateForm, clearForm, SELECT_STYLES, INPUT_STYLES } from '../utils/index.js'

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
  const { setVideos } = useContext(VideosContext)

  const navigate = useNavigate()

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm(nuevoVideo)

    setErrores(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoVideo)
      }).then(res => res.json())
        .then(data => {
          navigate('/')
          setVideos(prevVideos => [...prevVideos, data])
        })
    }
  }

  return (
    <form action='' className='mt-8 w-[80%]  mx-auto'>
      <h3 className='text-xl font-bold border-y-4 border-[#262626] py-4'>Crear Tarjeta</h3>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <InputForm name='titulo' type='text' errores={errores} nuevoVideo={nuevoVideo.titulo} handleChange={handleChange} placeholder='Ingrese el título' />
        <div className='flex flex-col w-full md:w-[50%]'>
          <label htmlFor='categoria' className={`mt-4 ${errores.categoria ? 'text-[#E53935]' : 'text-white'}`}>Categoría</label>
          <Select
            name='categoria'
            value={options.find(option => option.value === nuevoVideo.categoria) || ''}
            onChange={handleSelectChange}
            placeholder={errores.categoria ? errores.categoria : 'Seleccione una categoría'}
            options={options} className='w-full mt-3'
            styles={SELECT_STYLES(errores)}
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 w-full mt-4'>
        <InputForm name='imagen' type='url' errores={errores} nuevoVideo={nuevoVideo.imagen} handleChange={handleChange} placeholder='Ingrese el enlace de la imagen' />
        <InputForm name='video' type='url' errores={errores} nuevoVideo={nuevoVideo.video} handleChange={handleChange} placeholder='Ingrese el enlace del video' />
      </div>

      <div className='flex flex-col w-full mt-8'>
        <label htmlFor='descripcion' className={errores.descripcion ? 'text-[#E53935]' : 'text-white'}>Descripción</label>
        <textarea
          value={nuevoVideo.descripcion} name='descripcion' id='descripcion' onChange={handleChange} cols='20' rows='7'
          placeholder={errores.descripcion ? errores.descripcion : '¿De qué trata el video?'}
          className={`w-full md:w-[70%] ${INPUT_STYLES('descripcion', errores)}`}
        />
      </div>

      <div className='flex flex-col items-center md:items-start md:flex-row gap-6 mt-8 pb-[120px] md:pb-6'>
        <ButtonForm onClick={handleSubmit} saveVideo>GUARDAR</ButtonForm>
        <ButtonForm onClick={handleClear}>LIMPIAR</ButtonForm>
      </div>

    </form>
  )
}
