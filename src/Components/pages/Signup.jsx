import React from "react";
import "../../App.css";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const Signup = () => {
    
    const schema=yup.object().shape({
        fullName:yup.string().required("Your name is required"),
        email:yup.string().email().required(),
        age:yup.number().positive().integer().min(18).required(),
        password:yup.string().min(4).max(12).required(),
        confirmPassword:yup.string().oneOf([yup.ref("password"),null],"password don't match").required(),
    })

    const {register,handleSubmit,formState:{errors}} =useForm({
            resolver:yupResolver(schema),
    })

    const onSubmit=(data)=>{
        console.log(data)
    }


  return (
  
        
        <section className="debajo mt-20 max-w-4xl p-6 mx-auto bg-neutral-100 rounded-md shadow-md
         dark:bg-gray-800">
           <div className="text-center justify-center mx-auto text-teal-700 font-semibold
            text-2xl mb-10 uppercase">
            Holiday<span className="text-2xl text-amber-500">S</span> Inn

</div>
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white ml-20 mb-10">Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>   
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Full name</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40
                   dark:focus:border-cyan-300 focus:outline-none focus:ring" {...register("fullName")}/>
                     <p>{errors.fullName?.message}</p>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40
                   dark:focus:border-cyan-300 focus:outline-none focus:ring" {...register("email")}/>
                     <p>{errors.email?.message}</p>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300 focus:ring-opacity-40
                   dark:focus:border-cyan-300 focus:outline-none focus:ring" {...register("password")}/>
                     <p>{errors.password?.message}</p>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-cyan-400 focus:ring-cyan-300
                   focus:ring-opacity-40 dark:focus:border-cyan-300 focus:outline-none focus:ring" {...register("confirmPassword")} />
                  <p>{errors.confirmPassword?.message}</p>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform
             bg-cyan-600 rounded-md hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700">Save</button>
        </div>
    </form>
</section>       
    
  );
};

export default Signup;
