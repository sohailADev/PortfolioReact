import React from "react";
import ProjCard from "../AboutMe/ProjCard/ProjCard";

const Portfolio = () => {
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
                                        <a className="nav-link active" href="#">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Frontend</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Backend</a>
                                    </li>
                                </ul>
                            </div>
                            <section >
                                <div className="row mt-5">
                                    <ProjCard />
                                    <ProjCard />
                                    <ProjCard />
                                    <ProjCard />
                                    <ProjCard />
                                    <ProjCard />
                                    <ProjCard />
                                    <ProjCard />
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