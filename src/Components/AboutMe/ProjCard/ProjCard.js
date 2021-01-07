import React from 'react';



const ProjCard = (data) =>{
        return(
            <React.Fragment>

         			{/* {% for project in projects %} */}
				
					<div className="card mb-2 mr-3" >				
					<img className="card-img-top" src="https://picsum.photos/300"  alt="image" />	
					<div className="card-body">
						<h4 className="card-title">a Demo title </h4>
						<p className="card-text">A demo Descriptions</p>
						
					</div>
					<div className="card-footer">
						{/* {% for tag in project.tag.all %}					 */}
											
							<span className="badge badge-primary" >HTML</span>	
							<span className="badge badge-danger"  >CSS</span>	
							<span className="badge badge-info" >JS</span>	
							<span className="badge badge-primary">MongoDB</span>	
						
						
						{/* {% endfor %} */}
					
					</div>
					<div className="card-footer">
						<small className="text-muted"><a href="#" className="btn btn-outline-info">Live demo</a></small>
						<small className="text-muted"><a href="#" className="btn btn-outline-danger">View on github</a></small>
					</div>
					</div>

            </React.Fragment>
        )
    
    
    }
    export default ProjCard;