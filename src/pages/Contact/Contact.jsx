/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Contact.css';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";

const Contact = () => {
  const [user,setUser]=useState(null)
  const auth =getAuth(app);
  console.log(app);
  const provider = new GoogleAuthProvider();

  const handleGooglrSignIn=()=>{
    signInWithPopup(auth,provider)
    .then(result =>{
      const loggedInUser = result.user;
      console.log(loggedInUser);
      setUser(loggedInUser);
    })
    .catch(error =>{
      console.log('error',error.message)
    })
  }

  const handleSignOut=()=>{
    signOut(auth)
        .then(result =>{
          console.log(result);
          setUser(null);
        })
        .catch(error=>{
          console.log(error)
        })
  }
  return (
    <div>
      <Link to="/contact"></Link>
      <div>
        {/* emni kortechi ---------------*/}
        <div>
          {
            user?
            <button onClick={handleSignOut}>Sign Out</button>:
            <button onClick={handleGooglrSignIn}>Google login</button>
            
          }
          {user && <div>
            <h3>User: {user?.displayName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>

          }
        </div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* prlin*/}
      <div >
      
      </div>
    </div>
  );
};

export default Contact;
