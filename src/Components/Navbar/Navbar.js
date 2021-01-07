import  React  from "react";
import { NavLink } from "react-router-dom";

const Navbar =()=> {
    return(     
	<div className="container">
		<nav  id="navigation"  className="navbar navbar-expand-lg navbar-dark bg-primary">
		<NavLink to="/" className="navbar-brand" >SA</NavLink>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
		</button>

		<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			<ul className="navbar-nav ml-auto">
			<li className="nav-item">
			<NavLink to="/" className="nav-link"> About Me</NavLink>
			</li>
			<li className="nav-item">
			<NavLink to="/portfolio" className="nav-link" >Portfolio</NavLink>
			</li>	
			<li className="nav-item">
			<NavLink to="/Contact" className="nav-link " >Contact</NavLink>
			</li>
			</ul>

		</div>
	</nav>
</div>


    )}
export default Navbar;