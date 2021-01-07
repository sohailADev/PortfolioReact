import React from 'react';
import Particles from 'react-particles-js';
import ProjCard from "./ProjCard/ProjCard";
import { NavLink } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard"
const AboutMe = () =>{
        return(

<React.Fragment>

	<div className="container">
	<div className="main-wrapper">		
		<section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser media flex-column flex-lg-row">					
					<div className="media-body">
						<h2 className="name font-weight-bold mb-1">Sohail Aslam</h2>
						<div className="tagline mb-3">Full Stack Software Engineer</div>
						<div className="bio mb-4">I'm a software engineer specialised in frontend and backend development for 
						complex scalable web apps.  Want to know how I may help your project? Check out my projects
						<NavLink to="/portfolio" className="link-on-bg" > Portfolio</NavLink>.
							<br></br>
							<br></br>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am a motivated professional with a demonstrable record of helping organizations meet their goals. My positive 
							attitude, world-class work ethic, and attention to detail have helped me succeed in a variety of fast-paced 
							environments. I take my work seriously, and approach every undertaking – whether it is cultivating customer
							 rapport to drive satisfaction, executing software development activities, or managing technical software
							  development projects through fulfillment – with enthusiasm, diligence, and positivity. I am ready to tackle 
							  a challenging, professional position that makes excellent use of my multi-tasking, organizational, 
							  technical and relationship management skills. <br></br>

							  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My strong communication skills and years of experience working with diverse groups allow me to move with ease and obtain commitments among clients and coworkers of varied backgrounds and different levels of responsibility. I have the utmost respect for confidentiality, and approach sensitive matters with discretion and tact. I am especially skilled at keeping operations running smoothly and efficiently in the midst of changes to technologies, procedures, or personnel. My knowledge and hands-on learning experiences have prepared me well for a challenging role.
						</div>
						<div className="mb-4">
							
							<NavLink to="/portfolio" className="link-on-bg" className="btn btn-primary mr-2 mb-3" >
								<i className="fas fa-arrow-alt-circle-right mr-2"></i>
								<span className="d-none d-md-inline">View</span>
								&nbsp;Portfolio
								 </NavLink>

						</div>
					</div>
						<div className="image_section_wrapper">
							<div className="image_section ">
								      <ProfileCard />   
								{/* <img className="profile-image mb-3 rounded "   src="/p.jpg" alt="My image" /> 		 */}
							</div>
							
						</div>
				</div>
			</div>
		</section>
		
		<section className="overview-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-3">What I do</h2>
				<div className="section-intro mb-5">I have  experience building software. Below is a quick overview of my main technical skill sets and technologies I use. 
				Want to find out more about my experience?
				 Check out my
				  {/* <a href="resume.html">online resume</a> and */}
				   <NavLink to="/portfolio" className="link-on-bg" > Project Portfolio</NavLink>.</div>
				<div className="row">
					<div className="row"><h2 className="section-title font-weight-bold mb-3">Here are a few technologies I've been working with recently:</h2></div><br /><br />
					<div className="item mt-5 mr-5">
					<div className='card' style={{width: "18rem"}}>
						<div className="intro-wrapper">
								<div className="nav-wrapper">
									<div className="dots-wrapper">
										<div className="browser-dot" id="dot-1"></div>
										<div className="browser-dot" id="dot-2"></div>
										<div className="browser-dot" id="dot-3"></div>
									</div>				
								</div>
								<div>
								<div className="skills-icon-holder"><i className="far fa-file-code skill-icon"></i></div>
									<h5 className="card-title pl-5 ml-5" >Frontend</h5>
									<div className="item-inner card-body">

										<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-html5 mr-2"></i><h2 className="item-title">HTML</h2></div>
										<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-css3-alt mr-2 "></i><h2 className="item-title"> CSS</h2></div>										
										<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-js-square mr-2"></i><h2 className="item-title">JavaScript</h2></div>
										<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-react mr-2"></i><h2 className="item-title">Reactjs</h2></div>
										<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-bootstrap mr-2"></i><h2 className="item-title">Bootstrap</h2></div>
										<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-sass mr-2"></i><h2 className="item-title">Sass</h2></div>
									

									</div>
								</div>
						</div>			
					</div>  
					</div>  
						<div className="item mt-5 mr-5">
							<div className='card' style={{width: "18rem"}}>
							<div className="intro-wrapper">
								<div className="nav-wrapper">
									<div className="dots-wrapper">
										<div className="browser-dot" id="dot-1"></div>
										<div className="browser-dot" id="dot-2"></div>
										<div className="browser-dot" id="dot-3"></div>
									</div>				
								</div>
								<div>
								<div className="skills-icon-holder"><i className="fas fa-database skill-icon"></i></div>
								<h5 className="card-title pl-5 ml-5" >Backend</h5>
									<div className="item-inner card-body">
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-python mr-2"></i><h2 className="item-title">Python</h2></div>
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-dyalog mr-2"></i><h2 className="item-title">django</h2></div>
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-node-js mr-2 "></i><h2 className="item-title"> Node.js</h2></div>										
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-js-square mr-2"></i><h2 className="item-title">Express</h2></div>
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fas fa-database mr-2"></i><h2 className="item-title">MongoDB(NoSql)</h2></div>
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fas fa-server mr-2"></i><h2 className="item-title">PostgreSQL(Sql)</h2></div>
											
																																													
									</div>
								</div>
							</div>			
						</div>			
					</div>  
					<div className="item mt-5 mr-5">
							<div className='card' style={{width: "18rem"}}>
							<div className="intro-wrapper">
								<div className="nav-wrapper">
									<div className="dots-wrapper">
										<div className="browser-dot" id="dot-1"></div>
										<div className="browser-dot" id="dot-2"></div>
										<div className="browser-dot" id="dot-3"></div>
									</div>				
								</div>
								<div> 
								<div className="skills-icon-holder"><i className="fas fa-bookmark skill-icon"></i></div>
								<h5 className="card-title pl-5 ml-5" >Others</h5>
									<div className="item-inner card-body">
										
											
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-npm mr-2"></i><h2 className="item-title">npm</h2></div>
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fa fa-github-square mr-2"></i><h2 className="item-title">Github</h2></div> 											
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-gitlab mr-2"></i><h2 className="item-title">Giblab</h2></div> 
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fas fa-infinity mr-2"></i><h2 className="item-title">Devops</h2></div> 
											<div className="item-icon"><i className="far fa-check-circle icon-chk "></i><i className="fab fa-uikit mr-2"></i><h2 className="item-title">UX/Wirefram</h2></div> 
										
														<br />								
										

									</div>
								</div>
							</div>			
						</div>			
					</div>  
			
		
		
				
			</div>
			</div>
		</section>
		
















		<div className="container"><hr /></div>
		
	

		<footer className="footer text-center py-4">
			<small className="copyright">Copyright &copy; <a href="#" >Sohail Aslam</a></small>
		</footer>
		
	</div>
</div>



{/* particles */}
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 150,
	            "density": {
	                "enable": true,
	                "value_area": 7000
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 5,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
                  "image",
                //   "triangle",
                 
                //   "star",             
                  
	           
              ],
              "stroke": {
                "width": 0,
                "color": "#000000"
            },
	            "image": [
	                {
	                    "src": "svgs/css.svg",
	                    "height": 20,
	                    "width": 23
	                },
	                {
	                    "src": "svgs/bootstrap.svg",
	                    "height": 20,
	                    "width": 20
	                },
	                {
	                    "src": "svgs/django.svg",
	                    "height": 20,
	                    "width": 20
                  },
                  {
                    "src": "svgs/gitlab'.svg",
                    "height": 20,
                    "width": 23
                },
                {
                    "src": "svgs/github.svg",
                    "height": 20,
                    "width": 20
                },
                {
                    "src": "svgs/django1.svg",
                    "height": 20,
                    "width": 20
                },
                {
                    "src": "svgs/html.svg",
                    "height": 20,
                    "width": 20
                },
                {
                    "src": "svgs/js.svg",
                    "height": 20,
                    "width": 20
                },
                {
                    "src": "svgs/material-ui.svg",
                    "height": 20,
                    "width": 20
                },
                {
                    "src": "svgs/js.svg",
                    "height": 20,
                    "width": 20
                }

	            ]
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
          "color": {
            "value": [
                // "#191970",
                "#663399",
                // "#27ae60",
                // "#1abc9c",
                // "#8e44ad",             
                // "#fc6058",              
                // "#54b689",
                // "#fec02f",
                // "#6cc3d5",
            ]
        },
        "size": {
          "value": 14,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
	    },
	    "retina_detect": false
	}} />
{/* particles---end */}

       
</React.Fragment>

)}
export default AboutMe;