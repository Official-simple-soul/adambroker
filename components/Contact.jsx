import React from 'react'

function Contact() {
  return (
    <div className='pt-20'>
      <h1 className='font-bold text-lg'>Contact Us</h1>
      <form action="" className='mt-3'>
        <label htmlFor="">Name</label>
        <input type="name" name='name' className='mb-3 block w-full bg-transparent rounded-md py-2 px-2 border border-text1 mt-2' />
        <label htmlFor="" className=''>Email</label>
        <input type="email" name='email' className='mb-3 block w-full bg-transparent rounded-md py-2 px-2 border border-text1 mt-2' />
        <label htmlFor="" className=''>Message</label>
        <textarea name="message" className='block w-full bg-transparent rounded-md py-2 px-2 border border-text1 mt-2 h-24'></textarea>
        <button type="" className='mt-5 px-5 py-2 bg-other1 rounded-md text-white'>Contact</button>
      </form>
    </div>
  )
}

export default Contact
