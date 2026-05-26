import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'

const Login = () => {
  return (
    <div className='min-h-screen flex flex-col md"flex:row'>
      {/* Left side - branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
        <img src={assets.logo} alt="" className="h-12 object-contain" />
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="grp-users" className='h-6 md:h-8' />
          </div>

          <div>
            <div className='flex'>
              {Array(5).fill(0).map((_, i)=> (<Star stroke="none" className="size-4 md:size-4.5 text-transparent fill-amber-500" key={i}/>))}
            </div>
            <p>Used by Pranav's Inner Circle</p>
          </div>
          <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-clip-text text-transparent'>Be the part of the Circle</h1>
          <p className='text-xl md:text-3xl max_w-72 md: max-w-md'>Youth's New Circle</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* Right Side - Login Form */}
      <div></div>

    </div>
  )
}

export default Login