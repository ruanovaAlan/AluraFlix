import { useState, useEffect } from 'react'

export default function useFetchData() {
  const [videos, setVideos] = useState([])
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/ruanovaAlan/alura-flix-api/videos')
      .then(res => res.json())
      .then(data => setVideos(data))

    fetch('https://my-json-server.typicode.com/ruanovaAlan/alura-flix-api/categorias')
      .then(res => res.json())
      .then(data => setCategorias(data))
  }, [])

  return { videos, categorias, setVideos }
}
