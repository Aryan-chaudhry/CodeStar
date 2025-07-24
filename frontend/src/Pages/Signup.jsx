import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const Submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signup', {
        name:name,
        email:email,
        password:password,
      })
      console.log(res.data);
      console.log("data send to api successfull")
    } catch (error) {
      console.log("Error", error);
    }
  }

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-gray-100">
      <Header />

      <div className="flex flex-col items-center justify-center pt-24 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeInUp text-center">
          Create Your Account
        </h2>

        <form
          onSubmit={Submit}
          className="bg-neutral-800 p-8 rounded-xl shadow-lg w-full max-w-md space-y-6 animate-fadeInUp delay-200"
        >
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e)=>(setName(e.target.value))}
              required
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
