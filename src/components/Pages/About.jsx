import React from 'react'

const About = () => {
  return (
    <div>
      <div>
        <h1>Contact Us</h1>
        <p>Fill out the form below and we'll contact you shortly.</p>
      </div>
      <div>
        <form >
          <label>
          *First Name
          </label>
          <input type="text" name='name' placeholder='First Name' />
          <label>
          *Last Name
          </label>
          <input type="text" name='last name' placeholder='Last Name' />
          <lable>*E-Mail Address</lable>
          <input type="text" name='email' placeholder='Email Address' />
          <label>*Phone</label>
          <input type="text" name='phone' placeholder='Phone Number' />
          <label>Comments:</label>
          <textarea name='Comment' rows="6"></textarea>
        </form>
        <div>
          <h1>Phone</h1>
          <p>Sales: 352-702-0832</p>
          <p>Service: 352-702-0832</p>
          <p>Parts: 352-702-0667</p>     
           </div>

      </div>
    </div>
  )
}

export default About