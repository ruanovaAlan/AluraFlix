import { useState, useEffect } from 'react'

export default function useFetchData() {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then(res => res.json())
      .then(data => setVideos(data))

    fetch('http://localhost:3000/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
  }, [])

  return { videos, categorias }
}
