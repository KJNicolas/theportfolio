import React from "react";
import Layout from "../compoents/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <lottie-player
            src="https://assets6.lottiefiles.com/packages/lf20_nnQHiM.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className='w-screen flex justify-center'>

             <div className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50'>
                 <h1 className='text-2xl font-semibold'>Reach out with any questions and i'll be sure to respond back swiftly</h1>
                 <input type="text" placeholder='Name' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                 <input type="text" placeholder='Email' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                 <textarea type="text" placeholder='Query' className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5'/>
                  
                  <button className='bg-yellow-500 rounded text-white px-5 py-1 mt-3'>SUBMIT</button>
           
             </div>

        </div>

      </div>
    </Layout>
  );
}

export default Contact;
