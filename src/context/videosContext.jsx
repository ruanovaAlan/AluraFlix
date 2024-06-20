import { useState, createContext } from 'react'
import useFetchData from '../hooks/useFetchData'

export const VideosContext = createContext()

const VideosContextProvider = ({ children }) => {
  const { videos, categorias, setVideos } = useFetchData()
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <VideosContext.Provider value={{ videos, categorias, setVideos, selectedVideo, setSelectedVideo }}>
      {children}
    </VideosContext.Provider>
  )
}

export default VideosContextProvider
