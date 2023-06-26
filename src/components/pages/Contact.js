import { Container,Row } from "react-bootstrap";
import Banner from "../Banner/Banner";
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation,faFax,faEarth } from '@fortawesome/free-solid-svg-icons'
import face from '../../assets/face.png';
import twitter from '../../assets/twitter.png';
import insta from '../../assets/insta.png';
import linked from '../../assets/linked.png';
import { Link } from "react-router-dom";
import FormContact from "./FormContact";
function Contact(){
    return(
        <>
            <Banner title="Contact Us" subtitle="Contact us"/>
            <div className="cont-body">
                <Container>
                    <Row>
                        <div className="col-sm-12 col-md-6">
                            <FormContact/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div class="side">
                                <div className="overlay">
                                    <h4>Contact Us For Any Informations</h4>
                                    <div><FontAwesomeIcon icon={faLocation}/>Location</div>
                                    <hr/>
                                    <span>2005 Stokes Isle Apt. 896, Venaville 10010, USA Email & P</span>
                                    <div><FontAwesomeIcon icon={faFax}/>Email & Phone</div>
                                    <hr/>
                                    <span>
                                        info@yourdomain.com<br/>
                                        (+68) 120034509
                                    </span>
                                    <div><FontAwesomeIcon icon={faEarth}/>Follow Us</div>
                                    <hr/>
                                    <div className="social">
                                        <Link><img src={face} alt=""/></Link>
                                        <Link><img src={twitter} alt=""/></Link>
                                        <Link><img src={insta} alt=""/></Link>
                                        <Link><img src={linked} alt=""/></Link>
                                    </div>
                                </div>                                   
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
            
            
        </>
    )
}
export default Contact;