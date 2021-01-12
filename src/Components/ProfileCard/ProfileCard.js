
import React, { Fragment } from 'react';
import JSimg from '../images/jsicon.jpeg'
import CSSimg from '../images/cssicon.png'
import HTMLimg from '../images/htmlicon.png'
import Reactimg from '../images/reacticon.png'
import Nodeimg from '../images/nodejsicon.png'
import Bootstrapimg from '../images/bootstrapicon.png'
import Mainimg from '../images/p.jpg'
import Gitlabimg from '../images/gitlabicon.png'
import Githubimg from '../images/githubicon.png'
import Gitimg from '../images/giticon.png'

import Python from "../images/pythonicon.png"
import Firebase from "../images/firebaseicon.png"
import Redux from "../images/reduxicon.png"

import Django from "../images/django.png"
import Mongo from "../images/mongodb.png"
import VS from "../images/vscode.png"
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const ProfileCard = () => (
  <Fragment>
    
    <Card id='cardProfile'>
      <CardImg top width="100%" src={Mainimg} alt="banner" />
   <div className="card_bottom">
      <CardBody >

  
      <div className="image_social"> 
								<ul className="social-list list-inline">
									<li className="list-inline-item"><a className="twitter" href="https://twitter.com/sohaila0707"  target="_blank"><i className="fab fa-twitter fa-fw fa-lg"></i></a></li>
									<li className="list-inline-item"><a className="linkedin" href="https://www.linkedin.com/in/sohail-aslam-503a07100/"  target="_blank"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
									<li className="list-inline-item"><a className="github" href="https://github.com/sohailADev"  target="_blank"><i className="fa fa-github fa-fw fa-lg"></i></a></li>						
								</ul>	
							</div>
      </CardBody>
              </div>
    </Card>
    
  </Fragment>
);

export default ProfileCard;