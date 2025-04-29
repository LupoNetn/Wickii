import React from 'react'

const features = [
  {
    title: "Bite-Sized Learning",
    description: "Break down complex topics into manageable, digestible chunks that fit into your busy schedule."
  },
  {
    title: "Personalized Path",
    description: "Adaptive learning technology that adjusts to your pace and learning style for optimal results."
  },
  {
    title: "Interactive Practice",
    description: "Hands-on exercises and real-world projects to reinforce your learning and build practical skills."
  }
]

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl lg:max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            Learn at Your Own Pace, <br className="hidden md:block" />
            One Bite at a Time
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Share your knowledge and learn from others in our community-driven platform. 
            Create engaging educational content or explore lessons crafted by fellow learners.
          </p>
          
          <button className="bg-gray-900 text-white px-8 py-3 lg:px-12 lg:py-4 rounded-full font-semibold 
            hover:bg-gray-800 transition duration-300 transform hover:scale-105 
            shadow-lg text-lg lg:text-xl">
            Start Learning Now
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 lg:mt-24">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 lg:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 lg:text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
