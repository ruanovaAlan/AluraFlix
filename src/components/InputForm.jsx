import { INPUT_STYLES, inputNames } from '../utils/index.js'

export default function InputForm({ name, type, errores, nuevoVideo, handleChange, placeholder, edit = false }) {
  return (
    <div className={`flex flex-col w-full ${!edit ? 'md:w-[50%]' : ''}`}>
      <label htmlFor={name} className={`${!edit ? 'mt-4' : ''} ${errores[name] ? 'text-[#E53935]' : 'text-white'}`}>{inputNames[name]}</label>
      <input
        type={type} id={name} name={name} value={nuevoVideo} onChange={handleChange}
        placeholder={errores[name] || placeholder}
        className={`w-full ${INPUT_STYLES(name, errores, edit)}`}
      />
    </div>
  )
}
