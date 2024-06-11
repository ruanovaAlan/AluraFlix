export default function Button({ title, isActive }) {
  const color = isActive ? '#2271D1' : '#F5F5F5'
  const shadow = isActive ? '0px 0px 12px 4px #2271D1 inset' : 'none'

  return (
    <button
      style={{ color, borderColor: color, boxShadow: shadow }}
      className='text-lg font-bold w-[180px] h-[54px] rounded-[10px] border-[2px]'
    >
      {title}
    </button>
  )
}
