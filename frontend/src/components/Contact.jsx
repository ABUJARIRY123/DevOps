import React, { useRef, useState  } from 'react';
import emailjs from 'emailjs-com';
import Popup from '../context/PopUp';

const Contact = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const contactform = useRef();
  const closePopup = () => {
    setShowSuccessPopup(false);
 };
 const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_vmaklnl', 'template_ui6xmwe', contactform.current, 'ZtwfZE-s4hDF7B71R')
    .then((result) => {
      console.log(result.text);
      setPopupMessage('Thank You for Your Submission');
      setShowSuccessPopup(true);
    }, (error) => {
      console.log(error.text);
    })
    .finally(() => {
      e.target.reset();
    });
};

 return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form ref={contactform} onSubmit={sendEmail} method='POST' className='flex flex-col max-w-[600px] w-full'>
        <div className='mt-20 pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300'>Contact Me</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button type="submit" className='text-white border-2 hover:bg-cyan-400 hover:border-cyan-400 px-4 py-3 my-8 mx-auto flex items-center'>Talk to Me</button>
      </form>
  {showSuccessPopup && <Popup message={popupMessage} closePopup={closePopup} />}
  </div>
 );
};

export default Contact;
