import Select from 'react-select'
import categorias from '../../db.json'

const options = categorias.categorias.map(categoria => ({
  value: categoria.categoria,
  label: categoria.categoria
}))

export default function Form() {
  return (
    <form action='' className='mt-8 w-[80%]  mx-auto'>
      <h3 className='text-xl font-bold border-y-4 border-[#262626] py-4'>Crear Tarjeta</h3>

      <div className='flex flex-col md:flex-row gap-4 w-full'>
        <div className='flex flex-col w-full md:w-[60%]'>
          <label htmlFor='title' className='mt-4'>Título</label>
          <input type='text' id='titulo' placeholder='Ingrese el título' className='w-full border-[3px] border-[#262626] hover:border-[#ccc] rounded-lg bg-transparent p-2 mt-3' />
        </div>
        <div className='flex flex-col w-full md:w-[60%]'>
          <label htmlFor='categoria' className='mt-4 '>Categoría</label>
          <Select
            options={options} className='w-full mt-3'
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: 'transparent',
                borderRadius: '8px',
                border: '3px solid #262626',
                boxShadow: 'none',
                height: '44px'
              }),
              menu: (base) => ({
                ...base,
                backgroundColor: 'transparent'
              }),
              option: (base, { isFocused }) => ({
                ...base,
                backgroundColor: isFocused ? '#393535' : 'transparent',
                color: 'white',
                borderRadius: '8px'
              })
            }}
          />
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-4 w-full mt-4'>
        <div className='flex flex-col w-full md:w-[50%]'>
          <label htmlFor='url' className='mt-4'>Imagen</label>
          <input type='text' id='url' placeholder='Ingrese el enlace de la imagen' className='w-full border-[3px] border-[#262626] hover:border-[#ccc] rounded-lg bg-transparent p-2 mt-3' />
        </div>
        <div className='flex flex-col w-full md:w-[50%]'>
          <label htmlFor='descripcion' className='mt-4'>Video</label>
          <input id='descripcion' placeholder='Ingrese el enlace del video' className='w-full border-[3px] border-[#262626] hover:border-[#ccc] rounded-lg bg-transparent p-2 mt-3' />
        </div>
      </div>

      <div className='flex flex-col w-full mt-8'>
        <label htmlFor=''>Descripción</label>
        <textarea
          name='' id='' cols='20' rows='7' placeholder='¿De qué trata el video?'
          className='w-full md:w-[70%] border-[3px] border-[#262626] hover:border-[#ccc] rounded-lg bg-transparent p-2 mt-3'
        />
      </div>

      <div className='flex flex-col items-center md:items-start md:flex-row gap-6 mt-8 pb-[120px] md:pb-6'>
        <button className='px-6 py-2 w-[50%] md:w-[20%] border-[3px] border-[#2271D1] hover:border-[#376195] rounded-lg'>GUARDAR</button>
        <button className='px-6 py-2 w-[50%] md:w-[20%] border-[3px] border-[#F5F5F5] hover:border-[#9a9a9a] rounded-lg'>LIMPIAR</button>
      </div>

    </form>
  )
}
