import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewVideo from './pages/NewVideo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nuevo-video' element={<NewVideo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
