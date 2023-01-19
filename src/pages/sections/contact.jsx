import React from 'react'
import '../sections/contact.css'

function Contact() {
  return (
<>
    <p className='contact'>Contact Us</p>
    <div className="container">
        <form >
            <label >First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
            <label >Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            <label >Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

            <input type="submit" value="Send"/>
        </form>
    </div>
</>
  )
}

export default Contact