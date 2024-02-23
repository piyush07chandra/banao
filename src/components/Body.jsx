 import { useState } from 'react'
import './Body.css'

const Body = () => {
  const [group,setGroup]=useState(true)
  const [frm,setFrm]=useState(false)
  const [sign,setSign]=useState(true)
  return (
    <>
<div className="image-bar" >
{
  group?
  <button onClick={()=>{setGroup(false)}} className='grp xl:hidden'>Join Group</button>
  :
  <button onClick={()=>setGroup(true)} className='grp xl:hidden'>Leave Group</button>
}

      <div className="xl:pt-72 xl:ml-40 ml-10 pt-64">
      <h1 className="font-semibold text-3xl ">Computer Engineering</h1>
        <p className=" font-medium text-xl">142,765 Computer Engineers follow this</p>
      </div>
      
      {
        frm&&
        
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10'>
        <button onClick={()=>setFrm(false)} className='cls-btn z-40 fixed rounded-2xl bg-black '><img  src='/baseline-cancel-24px.png'/></button>
        {/* form */}
        {
          
            sign?
            
            <div className='phone-form w-full mt-48 px-5  bg-white text-black z-30 fixed rounded-md '>
            <h1 className='font-bold text-2xl mt-4'>Create Account</h1>
            <form>
            <div className='flex mt-3'><input className='focus:outline-none border border-gray-300 w-40 h-9 pl-2 bg-gray-50 placeholder:text-gray-500' placeholder='First Name'/><input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500' placeholder='Last Name'/></div>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Email' type='email'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Password' type='password'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Confirm password' type='password'/>
              <button type='submit'  className='bg-blue-500 text-white rounded-xl px-2 h-9 mt-4'>Create Account</button>
            </form>
            <button className=' text-blue-500' onClick={()=>setSign(false)}>or,Sign In</button>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-16 pt-1 mt-4'><img className='mr-2 pt-1' src='/f_logo_RGB-Blue_1024.png'/><h1>Sign Up With Facebook</h1></button>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-20 pt-1 mt-2'><img className='mr-2 pt-1' src='/search.png'/><h1>Sign Up With Google</h1></button>
            <p className=' text-xs'>By signing up, you agree to our Terms & conditions, Privacy policy</p>

            </div>
            :
            <div className='phone-form w-full mt-48 px-5 fixed z-30 bg-white text-black rounded-md'>
            <h1 className='font-bold text-2xl mt-3 mb-2'>Sign Up</h1>
            <form>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Email' type='email'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Password' type='password'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Confirm password' type='password'/>
              <button className='bg-blue-500 text-white rounded-xl px-2 h-9 mt-4'>Sign In</button>
            </form>
            <button className=' text-blue-500' onClick={()=>setSign(true)}>or, Create account</button>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-16 pt-1 mt-4'><img className='mr-2 pt-1' src='/f_logo_RGB-Blue_1024.png'/><h1>Sign Up With Facebook</h1></button>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-20 pt-1 mt-2'><img className='mr-2 pt-1' src='/search.png'/><h1>Sign Up With Google</h1></button>
            <button className='hover:text-blue-500 text-center mt-2 ml-28'>Forgot Password?</button>
            </div>
          }
        
        </div>
      }
      
    </div>
    <button onClick={()=>setFrm(true)} className='xl:hidden pnk-btn fixed z-40 '><img src='/Group 6.png'/></button>
      
    </>
  )
}

export default Body
