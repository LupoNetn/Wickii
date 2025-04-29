import React, { useState, useEffect } from 'react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    content: "WICKII helped me master new programming concepts through bite-sized lessons. The personalized learning path made it easy to stay consistent.",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    content: "The interactive practice sessions were game-changing. I went from theory to practical implementation in record time.",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emma Davis",
    role: "UX Designer",
    content: "As a visual learner, I love how WICKII breaks down complex topics into digestible chunks with great examples.",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "James Wilson",
    role: "Student",
    content: "The community-driven content helped me find the perfect learning resources. I'm now confident in my skills!",
    image: "https://i.pravatar.cc/150?img=4"
  }
]

const UserStats = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      {/* Header Text */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          Join Our Active Members
        </h2>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-4xl md:text-6xl font-bold text-gray-900">50K+</p>
            <p className="text-gray-600 mt-2">Active Users</p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <p className="text-4xl md:text-6xl font-bold text-gray-900">98%</p>
            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel Section */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          What Our Users Say
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserStats
