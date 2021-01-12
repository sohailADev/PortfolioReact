import React,{useState} from "react";
import emailjs from 'emailjs-com';
import {Modal,Button} from 'react-bootstrap'

const Contact =() =>{
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	function sendEmail(e) {
		e.preventDefault();	

	  emailjs.sendForm('service_o9usl13', 'template_qtpde8h', e.target, 'user_b2MkBoGEDyhueFD7WUgNK')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset();
	}
	
	
    return (
<div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>&#10024;&#127775; Thanks  &#127775;&#10024; </Modal.Title>
        </Modal.Header>
        <Modal.Body>I will contact you as soon as possible !!&#9200;</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
 <div className="container">    
    <div className="main-wrapper">
	    <section className="cta-section theme-bg-light py-5">
		    <div className="container text-center single-col-max-width">
			    <h2 className="heading">Contact</h2>
			    <div className="intro">
			    <p>Interested in hiring me htmlFor your project or employement? You can fill in the contact form below or send me an email to <a href="mailto:#">sohailaslam0707@gmail.com</a></p>
			    <p>Want to get connected? Follow me on the social channels below.</p>
			    <ul className="list-inline mb-0">
				<li className="list-inline-item"><a className="twitter" href="https://twitter.com/sohaila0707"  target="_blank"><i className="fab fa-twitter fa-fw fa-lg"></i></a></li>
									<li className="list-inline-item"><a className="linkedin" href="https://www.linkedin.com/in/sohail-aslam-503a07100/"  target="_blank"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
									<li className="list-inline-item"><a className="github" href="https://github.com/sohailADev"  target="_blank"><i className="fa fa-github fa-fw fa-lg"></i></a></li>						
								
	                
	                
	             
	                
	                
	            </ul>
			    
			    </div>
			</div>
	    </section>
	    <section className="contact-section px-3 py-5 p-md-5">
		    <div className="container">
			    <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto" method="post" onSubmit={sendEmail}>
			        <h3 className="text-center mb-3">Get In Touch</h3>
			        <div className="form-row">                                                           
		                <div className="form-group col-md-6">
		                    <label className="sr-only" htmlFor="cname">Name</label>
		                    <input type="text" className="form-control" id="cname" name="from_name" placeholder="Name" minLength="2" required="" aria-required="true" />
		                </div>                    
		                <div className="form-group col-md-6">
		                    <label className="sr-only" htmlFor="cemail">Email</label>
		                    <input type="email" className="form-control" id="cemail" name="user_email" placeholder="Email" required="" aria-required="true" />
		                </div>
		         
		                <div className="form-group col-12">
		                    <label className="sr-only" htmlFor="cmessage">Your message</label>
		                    <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
		                </div>
		                 <div className="form-group col-12">
		                    <button type="submit" className="btn btn-block btn-primary py-2" onClick={handleShow}>Send Now</button>
		                </div>                           
		            </div>
		        </form>
		    </div>
	    </section>
	    
	    <footer className="footer text-center py-4">
		<small className="copyright">Copyright &copy; <a href="#" >Sohail Aslam</a></small>
		</footer>
    
    </div>
    </div>
    
</div>
    )
    }
    export default Contact;