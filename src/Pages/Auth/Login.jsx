import React, { useEffect } from "react";
import "./Auth.css";

import back from "../../assets/icon/back.png";
import secure from "../../assets/icon/secure.png";
import check from "../../assets/icon/check.png";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginuserAsync, selectError, selectUser } from "../../features/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
    const {flag} = useParams();
    const dispatch = useDispatch();
    const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   console.log(errors);
  const user = useSelector(selectUser);
  const loginError = useSelector(selectError);

  useEffect(() => {
    if( loginError ){
        toast.error(loginError);
    }
  }, [loginError])

  useEffect(() => {
    if( user ){
      if( flag === '0' ){
        Navigate('/');
        toast.success('Login Successfull !');
      }
      else{
        Navigate('/address');
      }
    } 
  }, [user, Navigate, flag])

  return (
    <>
    
      <div className="auth-main">
        <section className="auth-heading">
          <div>
            <Link to={'/'}><img src={back} alt="Back_here" /></Link>
            <p>Login Here</p>
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
          <p>Login</p>
          <div className="line"></div>
          <div className="round"></div>
          <p>Address</p>
          <div className="line"></div>
          <div className="round"></div>
          <p>Payment</p>
        </section>

        <form
          className="p1"
          onSubmit={handleSubmit((data) => {
            
            if( !errors.email && !errors.password ){
                // console.log( data );
                dispatch(loginuserAsync(data));
                
            }

                
          })}
        >
          <div>
            <label htmlFor="email">E-Mail Id</label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Enter Your Email ",
                pattern: {
                  value:
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                  message: "Enter Valid Email ",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red", textAlign: "start" }}>
                - {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"
            {...register("password", {minLength:{
                value: 8,
                message: "Password should be atleast 8-characters"
            }})}
            />
            <Link to="/forget-password">Forget Password</Link>
            {errors.password && (
              <p style={{ color: "red", textAlign: "start" }}>
                - {errors.password.message}
              </p>
            )}
          </div>

          <button type="submit">Login Here</button>
          <p>
            You don’t have an account <Link to={`/register/${flag}`}>Register Here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
