import Banner from '../components/Banner'
import Cards from '../components/Cards/Cards'

export default function Home() {
  return (
    <main className='pb-[50px] md:pt-[125px] flex-grow'>
      <Banner />
      <Cards />
    </main>
  )
}
