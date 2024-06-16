import Form from '../components/Form'

export default function NewVideo() {
  return (
    <main className='pb-[50px] md:pt-[125px] flex-grow text-white'>
      <h1 className='text-center text-4xl font-bold mt-8'>NUEVO VIDEO</h1>
      <h2 className='text-center text-lg mt-4'>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h2>
      <Form />
    </main>
  )
}
