import React, { useState, useEffect, useRef } from 'react';
import Header from '../component/Header'
function Home(props) {

    return (
        <React.Fragment >
            <>
                <section className="top-section">
                    <div className="container-fluid">
                        <div className="about-main-sec">
                            <div className="row">
                                <div className="col-xl-6 col-md-6 col-12">
                                    <div className="left-img">
                                        <img src={require("../images/about-img.png")} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-12">
                                    <div className="desc-sec">
                                        <h1>Hello.</h1>
                                        <p className="bold-text">My name is Julie Decraene</p>
                                        <p>
                                            Front-End developer focusing on crafting user experiences and
                                            design systems for software, web, and mobile products
            </p>
                                        <div className="icon-text">
                                            <a className="contact-icons" href="mailto:mark@gmail.com">
                                                <span>
                                                    <img src={require("../images/email.png")} className="img-fluid" />
                                                </span>
                                                <span className="text">mark@gmail.com</span>
                                            </a>
                                        </div>
                                        <div className="icon-text">
                                            <a className="contact-icons" href="tel:+1 129 8887 7232">
                                                <span>
                                                    <img src={require("../images/phone.png")} className="img-fluid" />
                                                </span>
                                                <span className="text">+1 129 8887 7232</span>
                                            </a>
                                        </div>
                                        <div className="more-button">
                                            <a href="#.">
                                                Download my CV in PDF
                <img
                                                    src={require("../images/right-arrow.png")}
                                                    className="img-fluid arrow-button"
                                                />
                                            </a>
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
