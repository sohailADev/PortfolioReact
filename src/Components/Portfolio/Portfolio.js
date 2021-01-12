 import React, { useState,useEffect } from "react";
import ProjCard from "../AboutMe/ProjCard/ProjCard";
import projectsList from "../../projects.json"
import { Button } from "bootstrap";

const Portfolio = () => {
    const [projects , setProjects] = useState([]);
    const [projectsCopy , setProjectsCopy] = useState([]);
    useEffect(() => {
     
        setProjects(projectsList)
        setProjectsCopy(projects)
      },[projects]);
 
   const  handleClick= (e) => {
        console.log(e.target.value)
        if(e.target.value === "All")
        {
            setProjectsCopy(projects)
        }
        else if(e.target.value === "Frontend"){
            const filteredProjs = projects.filter(p => p.category === e.target.value)
            setProjectsCopy(filteredProjs)
        }
        else if(e.target.value === "Backend"){
            const filteredProjs = projects.filter(p => p.category === e.target.value)
            setProjectsCopy(filteredProjs)
        }
        else if(e.target.value === "Games"){
            const filteredProjs = projects.filter(p => p.category === e.target.value)
            setProjectsCopy(filteredProjs)
        }
    }
  
    return (
        <div>
            <div className="container">
                <div className="main-wrapper  theme-bg-light">
                    <section className="cta-section py-5">
                        <div className="container text-center single-col-max-width">
                            <h2 className="heading">Portfolio</h2>
                            <div className="intro">
                                <p>Welcome to my online portfolio. Here are  som porjects which i recently completed</p>
                            </div>
                        </div>
                    </section>
                    <section className="projects-list px-3 py-5 p-md-5">
                        <div className="container">
                            <div className="text-center">
               
                                <ul className="nav justify-content-center">
                                    <li className="nav-item">
                                        <input type="button" id="projButton" className="btn btn-outline-primary" onClick={handleClick}  value="All" />
                                    </li>
                                    <li className="nav-item">
                                        <input type="button" id="projButton" className="btn btn-outline-primary" onClick={handleClick} value="Frontend"/ >
                                    </li>
                                    <li className="nav-item">
                                        <input type="button" id="projButton" className="btn btn-outline-primary" onClick={handleClick} value="Backend" />
                                        </li>
                                    <li className="nav-item">
                                        <input type="button" id="projButton" className="btn btn-outline-primary" onClick={handleClick} value="Games" />
                                    </li>
                                </ul>
                            </div>
                            <section >
                                <div className="row mt-5">
                                   
                                    {projectsCopy.map(project =>(
                                        <ProjCard 
                                        key={project.projectId}
                                        projectId={project.projectId}
                                        title={project.title}
                                        image={project.image}
                                        description={project.description}
                                        tags={project.tags}
                                        live_url={project.live_url}
                                        source_code={project.source_code}
                                   
                                        
                                        />
                                    ))}
                                 
                                </div>
                            </section>
                            <div className="container"><hr></hr></div>
                            <footer className="footer text-center py-4">
                                <small className="copyright">Copyright &copy; <a href="#" >Sohail Aslam</a></small>
                            </footer>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;