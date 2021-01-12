import React from 'react';
import { NavLink } from "react-router-dom";


const ProjCard = (props) =>{
        return(
            <React.Fragment>

         			{/* {% for project in projects %} */}
				
					<div className="card mb-2 mr-3" >				
					<img className="card-img-top"  id="projImage" src={props.image}  alt="image" />	
					<div className="card-body">
						<h4 className="card-title">{props.title}</h4>
						<p className="card-text">{props.description}</p>
						
					</div>
					<div className="card-footer">
					{props.tags.map(tag =>(
                                      	<span key={tag} className="badge badge-primary ml-1 " >{tag}</span>	
                                    ))}					
											
						
							{/* <span className="badge badge-danger ml-1"  >CSS</span>	
							<span className="badge badge-info ml-1" >JS</span>	
							<span className="badge badge-primary ml-">MongoDB</span>	 */}
						
						
			
					
					</div>
					<div className="card-footer">
						<small className="text-muted">
							<a href={props.live_url}  target="_blank" className="btn btn-outline-info">Live preview</a>
						
							</small>
							
						<small className="text-muted ml-2"><a href={props.source_code} target="_blank"  className="btn btn-outline-danger">Source Code</a></small>
					</div>
					</div>

            </React.Fragment>
        )
    
    
    }
    export default ProjCard;