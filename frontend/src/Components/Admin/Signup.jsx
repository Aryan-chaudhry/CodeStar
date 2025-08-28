    import React, { useState } from 'react'
    import axios from 'axios';
    import { toast, ToastContainer } from 'react-toastify';
    import { useNavigate } from "react-router-dom";
    import { NavLink } from 'react-router-dom';

    function SignUp({ darkMode }) {

        const navigate = useNavigate();

        const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");

        const [Email, setEmil] = useState("");
        const [password, setPassword] = useState("");

        const [send, setSend] = useState(false);

        function handleFirstName(e){
            setFirstName(e.target.value)
        }

        function handleLastName(e){
            setLastName(e.target.value)
        }

        function handlePassWord(e){
            setPassword(e.target.value);
        }

        function handleEmail(e){
            setEmil(e.target.value);
        }

        async function handleSubmit(e){
            e.preventDefault();
            
            const FormData = {
                firstName : firstName,
                lastName : lastName,
                email : Email,
                password : password
            };
            console.log(FormData);

            try {
                const res = await axios.post('http://localhost:5000/api/auth/Admin-signup', FormData)
                setSend(true);

                if(res.status == 201){
                    toast.success(`${firstName} ${lastName} registered successfully`)
                    setTimeout(()=>{
                        navigate("/Admin")
                    }, 1500);
                }
                
                
            } catch (error) {
                setSend(false)

                if (error.response?.status === 400) {
                    toast.error("User already exists");
                    setTimeout(()=>{
                        navigate("/Admin")
                    }, 1500);

                } else if (error.response?.status === 500) {
                    toast.error("Sorry, server error. Please try again later ⚠️");
                } else {
                    toast.error("Something went wrong, please try again");
                }

                
            }

            setFirstName("");
            setLastName("");
            setEmil("");
            setPassword("")
            
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
        <ToastContainer position="top-right" autoClose={3000} />
        <div
            className={
            darkMode
                ? "bg-black border border-orange-300 rounded-2xl shadow-lg  p-10 w-[400px]"
                : "bg-white border border-orange-300 rounded-2xl shadow-lg  p-10 w-[400px]"
            }
        >
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
            Admin Sign Up
            
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
            

            {/* First & Last Name */}
            <div className="flex gap-4">
            <input
                type="text"
                name='firstName'
                value={firstName}
                onChange={handleFirstName}
                placeholder="First Name"
                required
                className={
                darkMode
                    ? "w-1/2 p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                    : "w-1/2 p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                }
            />
            <input
                type="text"
                name='lastName'
                value={lastName}
                onChange={handleLastName}
                placeholder="Last Name"
                required
                className={
                darkMode
                    ? "w-1/2 p-3 rounded-lg border border-orange-300 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                    : "w-1/2 p-3 rounded-lg border border-orange-300 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-400 transition duration-300"
                }
            />
            </div>
                
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
            
            <div>
                <NavLink to='/admin/login' className='text-red-600'>Already have an Account?</NavLink>
            </div>
           

            {/* Submit Button */}
            <button 
                
                className="w-full py-3 rounded-lg bg-orange-300 text-black font-semibold 
                
                hover:scale-105 hover: hover:bg-orange-400 
                active:scale-95 
                transition-all duration-300 ease-in-out cursor-pointer"
            >
                Sign Up
            </button>
            </form>
        </div>
        </div>
    )
    }

    export default SignUp
