// import React from 'react'
// import { useState } from 'react'
import auth from '../firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import Navbar_LoggedIn from './Navbar_LoggedIn';
import Navbar_NotLoggedIn from './Navbar_NotLoggedIn';
import { useAuthState } from "react-firebase-hooks/auth";
// import useLoggedInUser from "../Hooks/useLoggedInUser";
import abstract from '../assets/abstract.png'


const LandingPage = () => {

    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    if(googleUser) {
        navigate('/categories')
    }

    if(error) {
        console.log(error.message)
    }

    if(loading) {
        console.log('loading ...')
    }  

    const handleGoogleSignIn = () => {
        if(!user) {
            signInWithGoogle();
        } else {
            navigate('/categories');
        }
    }

    const [user] = useAuthState(auth);
    // const [loggedInUser] = useLoggedInUser();
    // const result = user?.email?.split('@')[0];
    // console.log(loggedInUser)
    // console.log(result)
    const handleLogout = () => {
        auth.signOut().catch((error) => {
            console.error("Sign out error", error);
        });
    };


  return (
    <div className='flex flex-col w-full h-screen '>
        {user ? (
            <Navbar_LoggedIn handleLogout={handleLogout} user={user} />
        ) : (
            <Navbar_NotLoggedIn />
        )}
        
        <img src={abstract} style={{position: "absolute", top:"17%",transform:"rotate(45deg)" , left:"85%", width:"300px", zIndex:"1"}} className="brightness-50"/>
        <img src={abstract} style={{position: "absolute", top:"17%",transform:" rotate(-215deg)" , left:"-5%", width:"300px", zIndex:"1"}} className="brightness-50"/>

        <div className='h-full w-full flex flex-col justify-center items-center gap-2 -mt-[100px]'>
            <h1 className='text-[48px] poppins-bold'>Unlock Your E-commerce Potential</h1>
            <h1 className='text-[30px] poppins-medium -mt-2 mb-[30px]'>Data-Driven Insights for Smarter Selling</h1>
            <h1 className='text-[20px] poppins-light text-center'>Empower your e-commerce business with actionable analytics,<br/> competitive tracking, and trend discovery. </h1>
            {/* <h1 className='text-[16px] poppins-light'>Make informed decisions that drive growth.</h1> */}
            <div className="px-6 sm:px-0 max-w-sm mt-[30px]">
                <button onClick={handleGoogleSignIn} type="button" className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-xl px-10 py-3 text-center inline-flex items-center justify-between mr-2 mb-2">
                {/* <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg> */}
                Generate Insights<div></div></button>
            </div>
        </div>
    </div>
  )
}

export default LandingPage