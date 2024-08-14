import React from 'react'
import '../../App.css'

const Login = () => {
  return (
    <section className='debajo mt-20'>
      <div className="w-full max-w-sm mx-auto overflow-hidden
       bg-neutral-100 rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
    <div className="text-center justify-center mx-auto text-teal-700 font-semibold
            text-2xl mb-10 uppercase">
            Holiday<span className="text-2xl text-amber-500">S</span> Inn</div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-cyan-300" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-cyan-400 dark:focus:border-cyan-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-cyan-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                <button className="px-6 py-2 text-sm font-medium tracking-wide
                 text-white capitalize transition-colors duration-300 transform bg-cyan-500 rounded-lg
                  hover:bg-cyan-600 focus:outline-none focus:ring focus:ring-cyan-600 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <a href="#" className="mx-2 text-sm font-bold text-cyan-500 dark:text-cyan-400 hover:underline">Register</a>
    </div>
</div>
    
    
    </section>
  )
}

export default Login


