import { useHref } from 'react-router-dom'

export default function Page404() {
  const href = useHref()

  return (
    <div className='flex flex-col gap-6 items-center justify-center pb-[50px] md:pt-[125px] flex-grow'>
      <h1 className='text-8xl md:text-9xl font-bold text-red-600 text-center'>404</h1>
      <h2 className='tetx-2xl md:text-4xl text-center text-white font-semibold w-[80%]'>{`La página '${href}' que estás buscando no existe o no está disponible.`}</h2>
    </div>
  )
}
