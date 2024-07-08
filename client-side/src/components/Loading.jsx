import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="flex space-x-3">
      <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-200"></div>
      <div className="w-8 h-8 bg-green-500 rounded-full animate-bounce delay-400"></div>
      <div className="w-8 h-8 bg-red-500 rounded-full animate-bounce delay-600"></div>
    </div>
  </div>
  )
}


export default Loading