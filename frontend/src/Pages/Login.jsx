import React from 'react'
import Header from '../Components/Header'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';


function Login() {
    const [password, getPassword] = useState("");
    const [mail, getMail] = useState("");

    const submit = async (e) => {
        e.preventDefault()
        
        try {
            const res = await axios.post('http://localhost:5000/api/login', {
            email: mail,
            password: password,
            });

            console.log(res.data);

        } catch (error) {
            console.log("Error in fetching data from form");
        }
    }

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex justify-center items-center px-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-700">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Login to Your Account</h2>

          <form  onSubmit={submit} className="space-y-5">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={mail}
                onChange={(e) => getMail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => getPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>

          {/* Bottom text */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Don’t have an account?{' '}
            <NavLink to='/Signup' className='text-blue-400'>SignUp</NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
