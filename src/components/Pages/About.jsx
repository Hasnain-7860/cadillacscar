import React from 'react'

const About = () => {
  return (
    <div>
      <div className='bg-black text-white flex flex-col text-center py-7'>
        <h1 className='text-[40px]'>Contact Us</h1>
        <p className='text-[20px]'>Fill out the form below and we'll contact you shortly.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2  '>
        <form className='grid grid-cols-1 lg:grid-cols-2 w-[50vw] container py-20' >
          <div className='flex flex-col '><label className='text-[20px]'>
          *First Name
          </label  >
          <div className='w-[300px] h-[35px] bg-black '>
          <input  className='outline-none' type="text" name='name' placeholder='First Name' />
          </div> 
          </div>
          <div className='flex flex-col '>
          <label className='text-[20px]'>
          *Last Name
          </label>
          <input className='rounded-md shadow-lg border-solid border-2 border-black w-[250px]' type="text" name='last name' placeholder='Last Name' />
          </div>
          <div className='flex flex-col'>
          <lable className="text-[20px]">*E-Mail Address</lable>
          <input className='rounded-md shadow-lg border-solid border-2 border-black w-[250px]' type="text" name='email' placeholder='Email Address' />
          </div>
          <div className='flex flex-col'>
          <label className='text-[20px]'>*Phone</label>
          <input className='rounded-md shadow-lg border-solid border-2 border-black w-[250px]' type="text" name='phone' placeholder='Phone Number' />
          
          
          </div>
          <label>Comments:</label>
          <textarea  name='Comment' rows="6"></textarea>
        </form>
        <div>
          <div>
          <h1>Phone</h1>
          <p>Sales: 352-702-0832</p>
          <p>Service: 352-702-0832</p>
          <p>Parts: 352-702-0667</p>   
          </div>
          <hr />
          <h1>Address</h1> 
          <p>Plaza Cadillac</p>
          <p>8893 US HW 441 </p>
          <p>Leesburg, FL 34788</p> 
          <p>Hours and Directions</p>
           </div>

      </div>
    </div>
  )
}

export default About