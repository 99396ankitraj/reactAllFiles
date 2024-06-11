import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

const Login89 = () => {
  const [username ,setUsername] = useState('')
    const [password ,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
       e.preventDefault()
       setUser({username , password})
    }
  
 return (
  <div className='flex justify-center items-center h-[90vh]'>
   <div className='text-white bg-green-300 rounded-md h-[250px] w-[420px]'>
       <h2 className='text-center text-6xl mb-5 text-orange-100'>Login</h2>
       <div className='m-5 text-black'>
       <input className='border-black w-[300px] h-7 mb-6 ml-[50px] rounded-lg'  type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder=' Username'  />
       <br/>
       <input className='w-[300px] h-7 ml-[50px] rounded-lg'  type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder=' Password' />
       </div>
       <button className='ml-[70px] bg-orange-300 p-1.5 rounded-md hover:bg-orange-600 hover:border border-black' onClick={handleSubmit}>Submit</button>
   </div>
   </div>
 )
   
}

export default Login89