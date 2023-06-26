
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'
function Banner(props){
    return(
        <section className='banner'>
            <Container>
                <Row>
                    <div className='col-sm-12 col-md-12'>
                        <h1>{props.title}</h1>
                        <li>
                            <Link to="/">
                                <FontAwesomeIcon icon={faHome}/>
                                Home
                            </Link>
                             
                            / {props.subtitle}
                        </li>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;