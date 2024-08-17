// import React from 'react'

import Navbar_LoggedIn from "./Navbar_LoggedIn"
import Navbar_NotLoggedIn from "./Navbar_NotLoggedIn"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import CategoryDropdown from "./CategoryDropdown";
// import useLoggedInUser from "../Hooks/useLoggedInUser";
// import { useNavigate } from "react-router-dom";



const Categories = () => {

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

    // const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen w-full">
        {user ? (
            <Navbar_LoggedIn handleLogout={handleLogout} user={user} />
        ) : (
            <Navbar_NotLoggedIn />
        )}
        
        <div className="flex flex-col h-full w-full justify-center items-center">
            <div className="flex flex-row gap-5 h-1/2 w-1/2 justify-center items-center">
                <h1 className="text-[36px] poppins-medium">Choose Category:</h1>
                <CategoryDropdown />
            </div>
        </div>
    </div>
  )
}

export default Categories