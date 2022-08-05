import React, { useState, useEffect, useRef } from 'react';
import Header from '../component/Header'
import { Link } from "react-router-dom";
function Home(props) {

    return (
        <React.Fragment >
            <>
                <section className="project-sec">
                    <div className="container-fluid">
                        <div className="project-main-sec">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-md-12 col-12">
                                    <div className="desc-sec">
                                        <div className="more-button">
                                            <Link to="/work">
                                                <img
                                                    src={require("../images/right-arrow.png")}
                                                    className="img-fluid arrow-button"
                                                />
                Back to all projects
              </Link>
                                        </div>
                                    </div>
                                    <div className="left-title-sec">
                                        <h1>
                                            Project
              <span>3</span>
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
                                    </div>
                                    <div className="position-button-sec-main">
                                        <div className="website-button">
                                            <button>
                                                GO TO THE WEBSITE{" "}
                                                <img src={require("../images/right.png")} className="img-fluid" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-12 col-12">
                                    <div className="project-img">
                                        <div className="img-part">
                                            <img src={require("../images/project-img.png")} className="img-fluid" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Header />
            </>

        </React.Fragment>
    )

}

export default Home;
