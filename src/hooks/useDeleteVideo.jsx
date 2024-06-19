export default function useDeleteVideo(setVideos) {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/videos/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setVideos(prevVideos => prevVideos.filter(video => video.id !== id))
      })
      .catch(error => console.error('Error al eliminar el video:', error))
  }
  return handleDelete
}
