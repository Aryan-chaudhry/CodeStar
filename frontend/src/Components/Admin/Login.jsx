    import React, { useState } from 'react'


    function Login({ darkMode }) {


        const [Email, setEmil] = useState("");
        const [password, setPassword] = useState("");
        const [rememberMe, setRememberMe] = useState(false);


        function handlePassWord(e){
            setPassword(e.target.value);
        }

        function handleEmail(e){
            setEmil(e.target.value);
        }

        function handleRemeber(){
            setRememberMe(!rememberMe);
        }

        function handleSubmit(e){
            e.preventDefault();
           
            console.log(Email)
            console.log(password)
            console.log(rememberMe)
            
            setEmil("");
            setPassword("")
            setRememberMe(false);
        }

    return (
        <div
        className={
            darkMode
            ? "flex justify-center items-center min-h-screen p-6 "
            : "flex justify-center items-center min-h-screen p-6"
        }
        >
        {/* Card */}
        <div
            className={
            darkMode
                ? "bg-black border border-orange-300 rounded-2xl shadow-lg  p-10 w-[400px]"
                : "bg-white border border-orange-300 rounded-2xl shadow-lg  p-10 w-[400px]"
            }
        >
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            Admin Login
            
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                      
                
            {/* Email */}    
            <div>
                <label
                htmlFor="email"
                className={
                    darkMode
                    ? "block mb-2 text-sm font-medium text-white"
                    : "block mb-2 text-sm font-medium text-black"
                }
                >
                Your email
                </label>
                <input
                type="email"
                id="email"
                name='email'
                value={Email}
                onChange={handleEmail}
                placeholder="name@example.com"
                required
                className={
                    darkMode
                    ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                    : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                }
                />
            </div>

            {/* Password */}
            <div>
                <label
                htmlFor="password"
                className={
                    darkMode
                    ? "block mb-2 text-sm font-medium text-white"
                    : "block mb-2 text-sm font-medium text-black"
                }
                >
                Your password
                </label>
                <input
                type="password"
                id="password"
                name='password'
                value={password}
                onChange={handlePassWord}
                placeholder='Enter Your password'
                required
                className={
                    darkMode
                    ? "w-full p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                    : "w-full p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                }
                />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
                <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={handleRemeber}
                required
                className="w-4 h-4 text-orange-400 border-gray-600 rounded focus:ring-orange-300"
                />
                <label
                htmlFor="remember"
                className={
                    darkMode
                    ? "ml-2 text-sm font-medium text-white"
                    : "ml-2 text-sm font-medium text-black"
                }
                >
                Remember me
                </label>
            </div>

            {/* Submit Button */}
            <button
                
                className="w-full py-3 rounded-lg bg-orange-300 text-black font-semibold 
                
                hover:scale-105 hover: hover:bg-orange-400 
                active:scale-95 
                transition-all duration-300 ease-in-out cursor-pointer"
            >
                Login
            </button>
            </form>
        </div>
        </div>
    )
    }

    export default Login
