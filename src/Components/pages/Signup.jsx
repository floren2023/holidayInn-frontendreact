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
    <div className="signup">
        <h3 style={{color:"white"}}>Sigup form</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formcontrol">
          <input type="text" placeholder="Full name"  style={{width:300}} {...register("fullName")}/>
          <p>{errors.fullName?.message}</p>
        </div>
        <div className="formcontrol">
          <input type="text" placeholder="Email" style={{width:300}} {...register("email")} />
          <p>{errors.email?.message}</p>
        </div>
        <div className="formcontrol">
          <input type="number" placeholder="Age" style={{width:300}} {...register("age")}/>
          <p>{errors.age?.message}</p>
        </div>
        <div className="formcontrol">
          <input type="password" placeholder="Password" style={{width:300}} {...register("password")}/>
          <p>{errors.password?.message}</p>
        </div>
        <div className="formcontrol">
          <input type="password" placeholder="Confirm password"  style={{width:300}} {...register("confirmPassword")}/>
          <p>{errors.confirmPassword?.message}</p>
        </div>
        <div className="formcontrol">
        <input type="submit" style={{color:"green",FontWeight:500,width:302,backgroundColor:"#fff",height:50}} value="Submit"/>
        </div>
      </form>
    </div>
  );
};

export default Signup;
