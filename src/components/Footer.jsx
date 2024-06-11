import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer
      style={{ boxShadow: '0px 5px 29px 0px rgba(34, 113, 209, 0.70)' }}
      className='flex justify-center items-center shrink-0 h-[125px] bg-[#000000e6] border-t-[4px] border-[#2271D1]'
    >
      <img src={logo} alt='' className='h-[40px]' />
    </footer>
  )
}
