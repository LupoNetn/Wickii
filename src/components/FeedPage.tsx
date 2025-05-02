import FeedBottomBar from "./FeedBottomBar"
import FeedSideBar from "./FeedSideBar"

const FeedPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar - hidden on mobile, shown on md screens and up */}
      <div className="hidden md:block w-64 border-r border-gray-700/50">
        <FeedSideBar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 pb-16 md:pb-0">
        {/* Your feed content here */}
        <div className="p-4">
          <h1 className="text-gray-100">Feed Content</h1>
        </div>
      </div>

      {/* Bottom Navigation - shown on mobile, hidden on md screens and up */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50">
        <FeedBottomBar />
      </div>
    </div>
  )
}

export default FeedPage
