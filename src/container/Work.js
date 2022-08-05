import React, { useState, useEffect, useRef } from 'react';
import Header from '../component/Header'
import { Link } from "react-router-dom";

function Home(props) {

    return (
        <React.Fragment >
            <>
                <section className="top-section work-section">
                    <div className="container-fluid">
                        <div className="about-main-sec work-main-sec">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-md-12 col-12 height-set">
                                    <div className="left-position-sec">
                                        <div className="desc-sec">
                                            <h1>Work</h1>
                                            <p>
                                                Front-End developer focusing on crafting user experiences and
                                                design systems for software, web, and mobile products
              </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-md-12 col-12">
                                    <div className="right-side-desc-work">
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-12 padding-r-0 h-100 mobile-order1">
                                                <div className="work-img-sec">
                                                    <img src={require("../images/work-plain-bg.png")} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-12 padding-l-r-0 h-100 mobile-order0">
                                                <div className="desc-sec">
                                                    <h1>
                                                        Project <span>1</span>
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua.
                  </p>
                                                    <div className="more-button">
                                                        <Link to="/project1">
                                                            Learn more
                      <img
                                                                src={require("../images/right-arrow.png")}
                                                                className="img-fluid arrow-button"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-12 padding-r-0 h-100">
                                                <div className="desc-sec">
                                                    <h1>
                                                        Project <span>2</span>
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua.
                  </p>
                                                    <div className="more-button">
                                                        <Link to="/project2">
                                                            Learn more
                      <img
                                                                src={require("../images/right-arrow.png")}
                                                                className="img-fluid arrow-button"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-12 padding-l-r-0 h-100">
                                                <div className="work-img-sec">
                                                    <img src={require("../images/work-plain-bg.png")} className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6 col-md-6 col-12 padding-r-0 h-100 mobile-order1">
                                                <div className="work-img-sec">
                                                    <img src={require("../images/work-plain-bg.png")} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-12 padding-l-r-0 h-100 mobile-order0">
                                                <div className="desc-sec">
                                                    <h1>
                                                        Project <span>3</span>
                                                    </h1>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua.
                  </p>
                                                    <div className="more-button">
                                                        <Link to="/project3">
                                                            Learn more
                      <img
                                                                src={require("../images/right-arrow.png")}
                                                                className="img-fluid arrow-button"
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
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
