import React ,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const {user} = useContext(UserContext);
   if(!user ) 
   return <>
            <h1 class='h-[10vh] bg-red-500 text-center text-3xl font-bold pt-4 before:'>Please login</h1>
         </>

   return <div class='h-[10vh] bg-red-500 text-center text-3xl font-bold pt-4 before:'>welcome {user.username}</div>
  
}

export default Profile;