import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Footer from "../../components/Footer";
import "./landingstyle.css"


function Landing() {
    const location = useLocation();
    return (
       <div>
            <Container>
               <Row>
                    <Col size="md-12"> 
                          <h1 className="display-5" id="display-5">KnoPressure</h1>
                            <img  id="heart" src={"./assets/images/heart-799138__340.webp"} alt="heart" 
                                className="img-fluid"/>                        
                    </Col>
                    <Col size="col-12">
                        <p><strong>
                                Hypertension is as dangerous than ever! Known as the "silent killer", you can be considered overall healthy and then have a massive heart attack or stroke in the blink of an eye without any warning.  However, there are ways to lower your risk and avoid this!
                                If your blood pressure is too high, it puts extra strain on your blood vessels, heart and other organs, such as the brain, kidneys and eyes. Persistent high blood pressure can increase your risk of a number of serious and potentially life-threatening health conditions, such as: 
                            </strong></p>
                            <p id="firsttext"> heart disease. heart attacks !!!! Let's get heart healthy!</p>
                            </Col>
                            </Row>
                <Row>       <img src="https://i.pinimg.com/originals/b3/70/5c/b3705cc2edf8f527789e6e2be29f6267.gif" width="200px" alt="heart rate"/>             
                    <Col size="lg-12" className="login">                                 
                        <p id="secondtext">Visit our Site and Track your Blood Pressure</p>
                        <p id="thirdtext"> Login if you are a member or Signup to become a member</p>
                        <Link to="/login" className={location.pathname === "/login"}><button type="login" className="btn btn-primary btn-md" id="login-btn">Login</button></Link>
                        <br/>
                        <br/>
                        <ul>
                        <Link to="/signup" className={location.pathname === "/signup"}><button type="signup" className="btn btn-primary btn-md" id="login-btn">SignUp</button></Link>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
} 
export default Landing;