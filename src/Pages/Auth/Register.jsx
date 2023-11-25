import React, { useEffect } from "react";
import "./Auth.css";

import back from "../../assets/icon/back.png";
import secure from "../../assets/icon/secure.png";
import check from "../../assets/icon/check.png";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAsync, selectError, selectUser } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { flag } = useParams();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Handling Errors
  const loginError = useSelector( selectError );
  useEffect(() => {
    if( loginError ){
        toast.error(loginError);
    }
  }, [loginError])

  //On Approval
  const Navigate = useNavigate();
  const user = useSelector( selectUser );
  useEffect(() => {
    if(user){
      if( flag === '0' ){
        Navigate('/');
        toast.success("Login Successful !")
      } 
      else{
        Navigate('/address')
      }
    }
  }, [user, Navigate, flag])




  

  return (
    <>
      <div className="auth-main">
        <section className="auth-heading">
          <div>
            <img src={back} alt="Back_here" />
            <p>Register Here</p>
          </div>
          <div>
            <img src={secure} alt="" />
            <p>100% Secure</p>
          </div>
        </section>

        <section className="auth-top p1">
          <div className="round">
            <img src={check} alt="" />
          </div>
          <p>Register</p>
          <div className="line"></div>
          <div className="round"></div>
          <p>Address</p>
          <div className="line"></div>
          <div className="round"></div>
          <p>Payment</p>
        </section>

        <form className="p1" onSubmit={handleSubmit((data) => {

            if( data.confirm_password === data.password ){
              dispatch(registerUserAsync({email: data.email, password: data.password, isnotify: "true"}))
            }
            else{
              toast.error('Password and Confirm Password is not same')
            }
        })}>
          <div>
            <label htmlFor="email">E-Mail Id</label>
            <input type="text" id="email" {...register("email", {required: "Enter Email Here ", pattern:{
                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: "Enter a valid Email"
            }})}/>
            {errors.email && (
              <p style={{ color: "red", textAlign: "start" }}>
                - {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password", {required: "Enter Your Password", minLength:{
                value: 8,
                message: "Password Should be at least 8 Characters"
            }})}/>
            {errors.password && (
              <p style={{ color: "red", textAlign: "start" }}>
                - {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" {...register("confirm_password", {required: "Enter Your Password", minLength:{
                value: 8,
                message: "Password Should be at least 8 Characters"
            }})}/>
            {errors.confirm_password && (
              <p style={{ color: "red", textAlign: "start" }}>
                - {errors.confirm_password.message}
              </p>
            )}
          </div>

          <button type="submit">Register Here</button>
          <p>
            You have an account <Link to={`/login/${flag}`}>Login Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
