
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import UserStats from '../components/UserStats'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Link to='/feed' className='text-white'>to feed</Link>
      <UserStats />
    </div>
  )
}

export default Home
