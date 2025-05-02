import { useEffect, useState } from "react"



const FeedPage = () => {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const getRandomVideos = async () => {
    try {
      const topics = ["education", "technology", "science", "learning", "students"]
      const randomTopic = topics[Math.floor(Math.random() * topics.length)]

      const response = await fetch(
        `https://api.pexels.com/videos/search?query=${randomTopic}&per_page=9`,
        {
          headers: {
            Authorization: 'vNmpL3RPsdURSAu41Oj08UGWqV67qDTU8MklcQgMlXQySd7fyTg7E5pq',
          },
        }
      )

      const data = await response.json()
      setVideos(data.videos || [])
    } catch (error) {
      console.error("Error fetching videos:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getRandomVideos()
  }, [])

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Wickii: Learn in Bits</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-video bg-gray-800 rounded-lg animate-pulse"
                >
                  <div className="w-full h-full bg-gray-700"></div>
                </div>
              ))
            : videos.map((video) => (
                <div
                  key={video.id}
                  className="aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  >
                    <source src={video.video_files[0]?.link} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

export default FeedPage
