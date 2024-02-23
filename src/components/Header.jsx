
import { useState } from 'react';
import './Header.css'

const Header = () => {
  const [formOpen,setFormOpen]=useState(false)
  const [sign,setSign]=useState(true)
  return (
    <>
    <nav className=' h-16 xl:flex hidden'>
     <div className='atg'>
      <img src='/whole.png'/>
     </div>

     <div className='ml-48 flex items-center'>
     <button className='h-5 ml-3 absolute'><img src='/Vector.png'/></button>
      <input className=' w-96 pl-12 rounded-3xl h-10 bg-gray-100  placeholder:text-gray-600 focus:outline-none' placeholder='Search for your favorit groups in ATG'/>
     </div>

     <div className='flex ml-44 mt-6'>
      <button onClick={()=>setFormOpen(true)}  className='font-semibold'>create Account. <span className='text-blue-500'>Its free</span></button>
      <img className='h-1 ml-2 mt-3' src='/btnvctr.png'/>
     </div>
    
    </nav> 

    {/* form */}

{
  formOpen&&
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10">
           
          <div className="frm bg-white  rounded shadow-md">
          <h1 className='text-green-700 text-sm text-center font-semibold mt-3 mb-3'>Lets learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</h1>
          <div className='border-b w-full'></div>
          
          <div className='flex '>
          {/* form */}
          {
            sign?
            <div className='first ml-7'>
            <h1 className='font-bold text-2xl'>Create Account</h1>
            <form>
            <div className='flex mt-3'><input className='focus:outline-none border border-gray-300 w-40 h-9 pl-2 bg-gray-50 placeholder:text-gray-500' placeholder='First Name'/><input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500' placeholder='Last Name'/></div>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Email' type='email'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Password' type='password'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Confirm password' type='password'/>
              <button className='bg-blue-500 text-white rounded-xl w-full h-9 mt-4'>Create Account</button>
            </form>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-16 pt-1 mt-4'><img className='mr-2 pt-1' src='/f_logo_RGB-Blue_1024.png'/><h1>Sign Up With Facebook</h1></button>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-20 pt-1 mt-2'><img className='mr-2 pt-1' src='/search.png'/><h1>Sign Up With Google</h1></button>
            </div>
            :
            <div className='first ml-7'>
            <h1 className='font-bold text-2xl'>Sign Up</h1>
            <form>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Email' type='email'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Password' type='password'/>
            <input className='focus:outline-none border border-gray-300 w-full h-9 pl-2 bg-gray-50 placeholder:text-gray-500 mt-2' placeholder='Confirm password' type='password'/>
              <button className='bg-blue-500 text-white rounded-xl w-full h-9 mt-4'>Sign In</button>
            </form>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-16 pt-1 mt-4'><img className='mr-2 pt-1' src='/f_logo_RGB-Blue_1024.png'/><h1>Sign Up With Facebook</h1></button>
            <button className='flex border border-gray-800 w-full rounded-md h-9 pl-20 pt-1 mt-2'><img className='mr-2 pt-1' src='/search.png'/><h1>Sign Up With Google</h1></button>
            <button className='hover:text-blue-500 text-center mt-2 ml-28'>Forgot Password?</button>
            </div>
          }
           
            {/* image  */}
            <div className='ml-5'>
            {
              sign?
              <button onClick={()=>setSign(false)} className='ml-28 text-sm'>Already have an account? <span className='text-blue-500'>Sign In</span></button>
              :
              <button onClick={()=>setSign(true)} className='ml-16 text-sm'>Don’t have an account yet? <span className='text-blue-500'>Create new for free!</span></button>

            }
              
              <img src='/atg_illustration.png'/>
              <p className=' text-xs'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
            </div>
          </div>
            
          </div>
          <button onClick={()=>setFormOpen(false)} className='cancle-button'><img  src='/baseline-cancel-24px.png'/></button>
        </div>
}
    </>
  )
}

export default Header;
