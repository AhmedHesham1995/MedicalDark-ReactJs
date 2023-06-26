import './Services.css'
import Serve from '../../Serve'
import Banner from '../Banner/Banner'
import { Container,Row } from 'react-bootstrap'

function Services(){

    const fetchServices = Serve.map((service)=>{
        return(
            <div className='col-md-4'>
                <div id='box'>
                    <span>
                        {service.icon}
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.details}</p>
                    <button>View More</button>
                </div>
            </div>
        )
    })

    return(
        <>
            <Banner title="Services" subtitle="services"/>
            <Container>
                <Row>
                    {fetchServices}
                </Row>
            </Container>
        </>
    )
}

export default Services









