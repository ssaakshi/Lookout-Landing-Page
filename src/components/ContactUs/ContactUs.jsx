import React from 'react'
import './ContactUs.css'
import '../Container/Container.css'

export default function ContactUs() {
  return (

    <div className='contact-us'>
      <div className='contact-us-heading'>
        <p className='blue-heading'>1% of the industry</p>
        <p className='contact-us-heading-desc'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.</p>
      </div>
      <div className='email-field-contact'>
        <input type='text' placeholder='Enter your Email' className='input-field-contact'></input>
        <button className='btn-primary btn-contact'>Submit</button>
      </div>
    </div>

  )
}
