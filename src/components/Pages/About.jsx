import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <p>Fill out the form below and we'll contact you shortly.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2  '>
        <form className='grid grid-cols-1 lg:grid-cols-2 w-[70vw] container' >
          <div><label>
          *First Name
          </label>
          <input type="text" name='name' placeholder='First Name' />
          </div>
          <div>
          <label>
          *Last Name
          </label>
          <input type="text" name='last name' placeholder='Last Name' />
          </div>
          <div>
          <lable>*E-Mail Address</lable>
          <input type="text" name='email' placeholder='Email Address' />
          </div>
          <div>
          <label>*Phone</label>
          <input type="text" name='phone' placeholder='Phone Number' />
          
          {/* <label>Comments:</label>
          <textarea name='Comment' rows="6"></textarea> */}
          </div>
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