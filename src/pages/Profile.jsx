import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user)
  const fileRef = useRef(null)
  return (
      <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' ref={fileRef} hidden accept='image/*'/>
        <img
        onClick={() => fileRef.current.click()}
          src={currentUser.avatar}
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
       
        <input
          type='text'
          placeholder='username'
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg'
          // onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
          // onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          // onChange={handleChange}
          id='password'
          className='border p-3 rounded-lg'
        />
        <button
          
          className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
        >
          update
        </button>
        
      </form>
      <div className='flex justify-between mt-5'>
        <span
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
    </div>
    
  )
}

export default Profile
