import { useState } from "react"
import './SignLogin.css'


const Signlogin = () => {
    const [isLoggedIn, setIsLoggedIn]=useState(true)

    const login=()=>{
        setIsLoggedIn(!isLoggedIn)
      }
      const signin=()=>{
        setIsLoggedIn(!isLoggedIn)
      }
  return (
    <>
        {isLoggedIn?(
      <div className=" flex mt-24 ml-60 mr-60 bg-white text-white pb-4">          
          <div className='ml-9'>
          {/* Close button */}
            <form className='mt-14' >
              <input className='dialog-imput w-full text-black' placeholder='Username' name='Username'  />
              <input className='dialog-imput w-full text-black' placeholder='Email' name='Email' />
              <input className='dialog-imput w-full text-black' placeholder='Number' name='Number' />
              <input className='dialog-imput w-full text-black' placeholder='Password' name='Password' />
              <button className='bg-orange-500 mt-8 px-40 py-4 text-xl font-semibold rounded-md' >sign up</button>
              <button className="btn2 text-blue-600 mt-8 px-28 py-4 text-xl font-semibold rounded-md" onClick={login}>Existing User?Log in</button>
            </form>
          </div>
        </div>
      )
      :
      (
        <div className=" flex mt-24 ml-60 mr-60 bg-white text-white pb-4">

   <div className='ml-9'>
   {/* Close button */}
     <form className='mt-14' >
       <input className='dialog-imput w-full text-black' placeholder='Username' name='Username' />
       <input className='dialog-imput w-full text-black' placeholder='Password' name='Password' /> 
       <button className='bg-orange-500 mt-8 px-32 py-4 text-xl font-semibold rounded-md' >Log in</button>
     </form>
     <button  onClick={signin} className="btn2 text-blue-600 mt-8 px-28 py-4 text-xl font-semibold rounded-md" >Create an account</button>
   </div>
 </div>
      )
      }
    </>
  )
}

export default Signlogin;