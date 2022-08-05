import React, { useState, useEffect, useRef } from 'react';
import Header from '../component/Header'
function Home(props) {

    return (
        <React.Fragment >
            <>
                <section className="top-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="logo-section">
                                    <img className="img-fluid" src={require("../images/logo.png")} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="big-title">
                                    <h1>
                                        JULIE <br /> DECRAENE
            </h1>
                                    <p>Front-End Developer</p>
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
