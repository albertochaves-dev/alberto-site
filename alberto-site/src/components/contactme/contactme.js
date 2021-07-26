import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contactme = () => {
    const { register, errors, handleSubmit, reset } = useForm();

    const toastifySuccess = () => {
        toast('Form sent! You will recieve a response soon.', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

    const onSubmit = async (data) => {
        try {
            const templateParams = {
                name: data.name,
                email: data.email,
                subject: data.subject,
                message: data.message
            };    await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    }; 

    return(
        <section id="contact">
            <div className="row section-intro">
                <div className="col-twelve">
                <h5>Contact</h5>
                <h1>I'd Love To Hear From You.</h1>
                <p className="lead">If you also think that we can do great things working together, fill this form!</p>
                </div> 
            </div> {/* /section-intro */}
            <div className="row contact-form">
                <div className="col-twelve">
                {/* form */}
                <form name="contactForm" id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                    <div className="form-field">
                        <input 
                        {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less'
                            }})}
                            type="text" id="contactName" placeholder="Name" minLength={2} required 
                        />
                    </div>
                    <div className="form-field">
                        <input {...register('email', { 
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} 
                            type="email" id="contactEmail" placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <input {...register('subject', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                            }})}
                            type="text" id="contactSubject" placeholder="Subject" />
                    </div>                       
                    <div className="form-field">
                        <textarea {...register('message', {
                            required: { value: true, message: 'Please enter a message' }})} 
                            id="contactMessage" placeholder="Message" rows={10} cols={50} required defaultValue={""} />
                    </div>                      
                    <div className="form-field">
                        <button className="submitform">Submit</button>
                        <div id="submit-loader">
                        <div className="text-loader">Sending...</div>                             
                        <div className="s-loader">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                        </div>
                        </div>
                    </div>
                    </fieldset>
                </form> {/* Form End */}
                <ToastContainer />
                {/* contact-warning */}
                <div id="message-warning">            	
                </div>            
                {/* contact-success */}
                <div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                </div>
                </div> {/* /col-twelve */}
            </div> {/* /contact-form */}
            <div className="row contact-info">
                <div className="col-six tab-full collapse">
                <div className="icon">
                    <i className="icon-mail" />
                </div>
                <h5>Email Me At</h5>
                <p><a href="mailto:achavesherreros@gmail.com">achavesherreros@gmail.com</a></p>
                </div>
                <div className="col-six tab-full">
                <div className="icon">
                    <i className="icon-phone" />
                </div>
                <h5>Call Me At</h5>
                <p>Mobile: (+34) 644 450 552</p>
                </div>
            </div> {/* /contact-info */}
        </section>
        )
    
}

export default Contactme;