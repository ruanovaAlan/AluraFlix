import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewVideo from './pages/NewVideo'
import Page404 from './pages/Page404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EditVideoModal from './components/EditVideoModal'

import VideosContextProvider from './context/videosContext'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <BrowserRouter>
        <Navbar />
        <VideosContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/nuevo-video' element={<NewVideo />} />
            <Route path='*' element={<Page404 />} />
          </Routes>
          <Footer />
          <EditVideoModal />
        </VideosContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
