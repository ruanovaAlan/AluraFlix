import { Link, useHref } from 'react-router-dom'
import Button from './Button'
import logo from '../assets/logo.png'

export default function Navbar() {
  const href = useHref()
  const navBg = href === '/' ? '#262626' : 'rgba(0, 0, 0, 0.90)'

  return (
    <nav
      style={{ backgroundColor: navBg, boxShadow: '0px 5px 29px 0px rgba(34, 113, 209, 0.70)' }}
      className='flex justify-center md:justify-between items-center absolute md:top-0 bottom-0 left-0 right-0 h-[100px] md:h-[125px] w-[100%] border-t-[4px] md:border-b-[4px] border-[#2271D1]'
    >
      <Link to='/'>
        <img src={logo} alt='Logo AluraFlix' className='hidden md:flex ms-9 h-[40px]' />
      </Link>
      <div className='flex gap-8 md:me-10'>
        <Link to='/'>
          <Button title='HOME' isActive={href === '/'} type='home' />
        </Link>
        <Link to='/nuevo-video'>
          <Button title='NUEVO VIDEO' isActive={href === '/nuevo-video'} type='add' />
        </Link>
      </div>
    </nav>
  )
}
