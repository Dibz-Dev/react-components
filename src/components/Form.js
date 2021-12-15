import { useState, useEffect } from 'react';
import Message from './SubComps.js/Message';
import { BsTelephone, BsEnvelope } from 'react-icons/bs'

const Form = () => {

    const [showMessage,setShowMessage] = useState(false)

    useEffect(() => {

     const removeMessage = setTimeout(() => {
            setShowMessage(false)
        }, 5000)
        return(() => {
            clearTimeout(removeMessage)
        })

    }, [showMessage])

    return ( 

        <div className="form">
           {!showMessage && <h1 className='mob-form-header'>Contact us</h1>}
            <div className='contact-info'>
                {!showMessage ? <><h1>Contact us</h1> <p style={{
                    fontSize:'1.5em',
                    lineHeight: '2',
                    letterSpacing: '0.1em',
                    color: 'black'
                }}>Please get in touch with us if you have any questions at all! We will always get back to you within 48hours</p>
                <div className='phoneEmail-box'>
                        <h5><BsTelephone /> 0438235678</h5>
                        <h5><BsEnvelope /> socialPace@gmail.com</h5>
                </div>
                </> : null}
            </div>
            {!showMessage ? <form action="submit" onSubmit={(e) => {
                             e.preventDefault()
                             setShowMessage(true)
                         }} >
                <div className="form-inner">
                        <div className="input-box firstname">
                            <div>
                                <input type="text" name="name" id="" placeholder="Firstname" required /> 
                            </div>
                            <div className='lastname-box'>
                                <input type="text" name="name" id="" placeholder="Lastname" />
                                </div>
                            
                            </div>

                        <div className="input-box">
                            <input className="email" type="email" placeholder="Email" required required/>
                        </div>
                        <div className="input-box message-box">
                            <textarea className="message" name="message" id="" cols="30" rows="10" placeholder="Write your message here"></textarea>
                        </div>
                        <div>
                         <button type="submit" className="form-btn">Submit</button>
                        </div>
                </div>
            </form> : <Message />}
        </div>
     );
}
 
export default Form;