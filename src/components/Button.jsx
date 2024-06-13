import homeActivo from '../assets/home-activo.png'
import home from '../assets/home.png'
import agregarActivo from '../assets/agregar-activo.png'
import agregar from '../assets/agregar.png'

export default function Button({ title, isActive, type }) {
  const icon = type === 'home' ? home : agregar
  const iconActivo = type === 'home' ? homeActivo : agregarActivo

  return (
    <button
      className={
        `flex items-center justify-evenly text-lg font-bold 
        ${isActive ? 'w-[13rem] md:shadow-custom bg-[#2271d13d] text-[#2271D1] border-[2px] border-[#2271D1]' : 'text-[#F5F5F5] border-0 md:border-[2px] border-[#F5F5F5]'} 
        md:w-[180px] h-[54px] rounded-[20px] md:rounded-[10px] md:bg-transparent`
      }
    >
      <img className={`${isActive ? 'h-[30px]' : 'h-[45px]'} md:hidden`} src={isActive ? iconActivo : icon} alt={`${type} button`} />
      <span className={`${isActive ? 'flex' : 'hidden'} md:flex text-xl`}>{title}</span>
    </button>
  )
}
