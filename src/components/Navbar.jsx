import { Link, useHref } from 'react-router-dom'
import Button from './Button'

export default function Navbar() {
  const href = useHref()
  const navBg = href === '/' ? '#262626' : 'rgba(0, 0, 0, 0.90)'

  return (
    <nav
      style={{ backgroundColor: navBg, boxShadow: '0px 5px 29px 0px rgba(34, 113, 209, 0.70)' }}
      className='flex justify-between items-center h-[125px] w-[100%] border-b-[4px] border-[#2271D1] boxShadow-custom'
    >
      <Link to='/'>
        <img src='./img/logo.png' alt='Logo AluraFlix' className='ms-9 h-[40px]' />
      </Link>
      <div className='flex gap-6 me-10'>
        <Link to='/'>
          <Button title='HOME' isActive={href === '/'} />
        </Link>
        <Link to='/nuevo-video'>
          <Button title='NUEVO VIDEO' isActive={href === '/nuevo-video'} />
        </Link>
      </div>
    </nav>
  )
}
