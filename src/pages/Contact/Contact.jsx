/* eslint-disable no-unused-vars */
// /* eslint-disable react/no-unknown-property */
// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import './Contact.css';
// import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// import app from "../../firebase/firebase.init";

// const Contact = () => {
//   const [user,setUser]=useState(null)
//   const auth =getAuth(app);
//   console.log(app);
//   const provider = new GoogleAuthProvider();

//   const handleGooglrSignIn=()=>{
//     signInWithPopup(auth,provider)
//     .then(result =>{
//       const loggedInUser = result.user;
//       console.log(loggedInUser);
//       setUser(loggedInUser);
//     })
//     .catch(error =>{
//       console.log('error',error.message)
//     })
//   }

//   const handleSignOut=()=>{
//     signOut(auth)
//         .then(result =>{
//           console.log(result);
//           setUser(null);
//         })
//         .catch(error=>{
//           console.log(error)
//         })
//   }
//   return (
//     <div>
//       <Link to="/contact"></Link>
//       <div>
//         {/* emni kortechi ---------------*/}
//         <div>
//           {
//             user?
//             <button onClick={handleSignOut}>Sign Out</button>:
//             <button onClick={handleGooglrSignIn}>Google login</button>
            
//           }
//           {user && <div>
//             <h3>User: {user?.displayName}</h3>
//             <p>Email: {user.email}</p>
//             <img src={user.photoURL} alt="" />
//           </div>

//           }
//         </div>
//         <div className="hero bg-base-200 min-h-screen">
//           <div className="hero-content flex-col lg:flex-row-reverse">
//             <div className="text-center w-1/2 lg:text-left">
//               <h1 className="text-5xl font-bold">Login now!</h1>
//               <p className="py-6">
//                 Provident cupiditate voluptatem et in. Quaerat fugiat ut
//                 assumenda excepturi exercitationem quasi. In deleniti eaque aut
//                 repudiandae et a id nisi.
//               </p>
//             </div>
//             <div className="card w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//               <form className="card-body">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Email</span>
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="email"
//                     className="input input-bordered"
//                     required
//                   />
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Password</span>
//                   </label>
//                   <input
//                     type="password"
//                     placeholder="password"
//                     className="input input-bordered"
//                     required
//                   />
//                   <label className="label">
//                     <a href="#" className="label-text-alt link link-hover">
//                       Forgot password?
//                     </a>
//                   </label>
//                 </div>
//                 <div className="form-control mt-6">
//                   <button className="btn btn-primary">Login</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* prlin*/}
//       <div >
      
//       </div>
//     </div>
//   );
// };


//2nd phase
// export default Contact;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ryk1ydk', 'template_8306npz', form.current, 'Y8-44Z6hmp2exw81g')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
       <Link to="/contact"></Link>
       <div className='py-10 flex justify-center items-center'>
      <div className="w-full max-w-3xl rounded-lg bg-white px-10 pb-10 pt-8 shadow-md dark:bg-cyan-700">
        <div className="mb-6">
          <h2 className="text-center text-white text-3xl font-semibold tracking-tight">Contact Us</h2>
        </div>
        <form ref={form} onSubmit={sendEmail} className="w-full space-y-6">
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="user_name">
              Name
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="user_name"
              placeholder="Your Name"
              name="user_name"
              type="text"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="user_email">
              Email
            </label>
            <input
              className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="user_email"
              placeholder="Your Email"
              name="user_email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
            <label className="block font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
              id="message"
              placeholder="What's on your mind"
              name="message"
            />
          </div>
          <button className="rounded-md bg-sky-500 px-4 py-2 text-teal-600 transition-colors dark:bg-white" type="submit">
            Submit
          </button>
        </form>
        {/* done */}
      </div>
    </div>
    </div>
  );
};

export default Contact;