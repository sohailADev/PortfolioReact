import React from "react";
import emailjs from 'emailjs-com';


// export default function Contact() {


  
// 	return (
// 	  <form className="contact-form" onSubmit={sendEmail}>
// 		<input type="hidden" name="contact_number" />
// 		<label>Name</label>
// 		<input type="text" name="user_name" />
// 		<label>Email</label>
// 		<input type="email" name="user_email" />
// 		<label>Message</label>
// 		<textarea name="message" />
// 		<input type="submit" value="Send" />
// 	  </form>
// 	);
//   }
// import React from "react";
// import emailjs from 'emailjs-com';

const Contact =() =>{
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

 <div class="container">    
    <div class="main-wrapper">
	    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center single-col-max-width">
			    <h2 class="heading">Contact</h2>
			    <div class="intro">
			    <p>Interested in hiring me for your project or employement? You can fill in the contact form below or send me an email to <a href="mailto:#">sohailaslam0707@gmail.com</a></p>
			    <p>Want to get connected? Follow me on the social channels below.</p>
			    <ul class="list-inline mb-0">
				<li className="list-inline-item"><a className="twitter" href="https://twitter.com/sohaila0707"  target="_blank"><i className="fab fa-twitter fa-fw fa-lg"></i></a></li>
									<li className="list-inline-item"><a className="linkedin" href="https://www.linkedin.com/in/sohail-aslam-503a07100/"  target="_blank"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
									<li className="list-inline-item"><a className="github" href="https://github.com/sohailADev"  target="_blank"><i className="fa fa-github fa-fw fa-lg"></i></a></li>						
								
	                
	                
	             
	                
	                
	            </ul>
			    
			    </div>
			</div>
	    </section>
	    <section class="contact-section px-3 py-5 p-md-5">
		    <div class="container">
			    <form id="contact-form" class="contact-form col-lg-8 mx-lg-auto" method="post" onSubmit={sendEmail}>
			        <h3 class="text-center mb-3">Get In Touch</h3>
			        <div class="form-row">                                                           
		                <div class="form-group col-md-6">
		                    <label class="sr-only" for="cname">Name</label>
		                    <input type="text" class="form-control" id="cname" name="from_name" placeholder="Name" minlength="2" required="" aria-required="true" />
		                </div>                    
		                <div class="form-group col-md-6">
		                    <label class="sr-only" for="cemail">Email</label>
		                    <input type="email" class="form-control" id="cemail" name="user_email" placeholder="Email" required="" aria-required="true" />
		                </div>
		         
		                <div class="form-group col-12">
		                    <label class="sr-only" for="cmessage">Your message</label>
		                    <textarea class="form-control" id="cmessage" name="message" placeholder="Enter your message" rows="10" required="" aria-required="true"></textarea>
		                </div>
		                 <div class="form-group col-12">
		                    <button type="submit" class="btn btn-block btn-primary py-2">Send Now</button>
		                </div>                           
		            </div>
		        </form>
		    </div>
	    </section>
	    
	    <footer class="footer text-center py-4">
		<small className="copyright">Copyright &copy; <a href="#" >Sohail Aslam</a></small>
		</footer>
    
    </div>
    </div>
    
</div>
    )
    }
    export default Contact;