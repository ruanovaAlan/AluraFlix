export default function ButtonForm({ onClick, children, saveVideo = false, edit = false }) {
  const buttonStyles = !saveVideo ? 'border-[#F5F5F5] hover:border-[#9a9a9a]' : 'border-[#2271D1] hover:border-[#376195]'

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 w-[50%] md:w-[20%] border-[3px] ${buttonStyles} rounded-lg`}
    >{children}
    </button>
  )
}
