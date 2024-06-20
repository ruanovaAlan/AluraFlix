export function validateForm(video) {
  const errors = {}
  Object.entries(video).forEach(([key, value]) => {
    if (!value.trim()) {
      errors[key] = `El campo ${key} es obligatorio`
    }
  })
  if (!video.video.includes('https://')) {
    errors.video = 'El enlace debe ser una URL válida'
    video.video = ''
  }
  if (!video.imagen.includes('https://')) {
    errors.imagen = 'El enlace debe ser una URL válida'
    video.imagen = ''
  }
  return errors
}

export const clearForm = (setNuevoVideo) => {
  setNuevoVideo({
    titulo: '',
    descripcion: '',
    imagen: '',
    video: '',
    categoria: ''
  })
}

export const SELECT_STYLES = (errores, edit = false) => ({
  control: (base) => ({
    ...base,
    backgroundColor: 'transparent',
    borderRadius: '8px',
    border: `3px solid ${errores.categoria ? '#E53935' : (edit === false ? '#262626' : '#2271D1')}`,
    boxShadow: 'none',
    '&:hover': {
      border: `3px solid ${errores.categoria ? '#E53935' : '#ccc'}`
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
})

export const INPUT_STYLES = (name, errores, edit = false) => {
  const borderColor = !edit ? 'border-[#262626]' : 'border-[#2271D1]'
  const marginTop = !edit ? 'mt-3' : 'mt-2'
  const errorStyle = errores[name] ? 'border-[#E53935] hover:border-[#E53935] input-error' : 'hover:border-[#ccc]'
  const textColor = !edit ? '' : 'text-white text-sm'
  return `border-[3px] focus:outline-none focus:border-current rounded-lg bg-transparent p-2 ${marginTop} ${borderColor} ${errorStyle} ${textColor}`
}

export const inputNames = { titulo: 'Título', imagen: 'Imagen', video: 'Video', descripcion: 'Descripción' }
