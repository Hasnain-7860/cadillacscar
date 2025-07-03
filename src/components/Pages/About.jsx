import React from 'react'
import { toast } from 'react-toastify';

const About = ({ contactRef }) => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b9b5498c-afa8-4399-a9f1-d6b0bba0b517");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Submitted")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast(data.message)
        setResult("");
      }
    };
  

  return (
    <div ref={contactRef} className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-4xl sm:text-8xl font-bold  mb-2 text-center md:text-4xl'>Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span></h1>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8' >
            <div className='flex flex-wrap'>
                <div className='w-full md:w-[50%] text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 ' type="text" name='Name' placeholder='Your Name' required />
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 ' type="email" name='email' placeholder='Your Email' required />
                </div>
                
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300rounded py-3 px-4 mt-2 h-40 resize-none' text="Message" name='Message'placeholder='Message' required> </textarea>
            </div>
            <button className='border bg-yellow-400 text-black px-12 py-2 rounded mb-10 '>{result ?  result:"Send Message" }</button>
        </form>
    </div>
  )
}

export default About 