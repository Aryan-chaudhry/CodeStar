import React from 'react'
import Header from '../Components/Header'
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100">
      <Header />

      <div className="flex flex-col items-center justify-center text-center px-4 pt-32 md:pt-48">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 animate-fadeInUp">
          <Typewriter
            words={[
              'Welcome to Codestar',
              'Master Interviews with Confidence',
              'Track Your DSA Journey',
              'Get Interview Ready for Top Tech Firms',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl animate-fadeInUp delay-200">
          A professional coding platform built to prepare you for real-world software interviews — covering DSA, System Design, and Full-Stack Engineering.
        </p>

        <div className="mt-10 flex gap-4 animate-fadeInUp delay-300">
          <button className="px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-md hover:bg-white transition duration-300 shadow">
            Get Started
          </button>
          <button className="px-6 py-3 bg-neutral-700 border border-gray-600 text-gray-100 rounded-md hover:bg-neutral-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
