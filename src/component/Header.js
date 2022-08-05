import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";

function Home(props) {
    let path = window.location.pathname
    return (
        <React.Fragment >
            <>
                {/* Header Start */}
                <section className="bottom-menu-section">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                           { path != '/project1'&& path != '/project2'&& path != '/project3' && 
                            <div className="col-xl-9 col-md-9 col-12">
                                <div className="menu-list">
                                    <ul>
                                        <li>
                                            <Link className={path == '/' && 'active'} to="/" >Home</Link>
                                        </li>
                                        <li>
                                            <Link className={path == '/about' && 'active'} to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link className={path == '/work' && 'active'} to="/work">Work</Link>
                                        </li>
                                        <li>
                                            <a href="#.">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           } <div className="col-xl-3 col-md-3 col-12">
                                <div className="social-icons">
                                    <div className="social-menu">
                                        <a href="#.">
                                            <img className="img-fluid" src={require("../images/linkedin.png")} />
                                        </a>
                                    </div>
                                    <div className="social-menu">
                                        <a href="#.">
                                            <img className="img-fluid" src={require("../images/BehanceLogo.png")} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Header End */}
            </>

        </React.Fragment>
    )

}

export default Home;
