import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'

// We are using hooks as this component/function will be used in many pages where we would be required to show the details of a particular user.
const useLoggedInUser = () => {
    const [user] = useAuthState(auth) 
    const email = user?.email;
    const [loggedInUser, setLoggedInUser] = useState({});

    useEffect(() => {
        fetch(`https://buzzvibe-social-media-backend.onrender.com/loggedInUser?email=${email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setLoggedInUser(data);
            })
    },[email, loggedInUser]);

  return [loggedInUser, setLoggedInUser];
}

export default useLoggedInUser