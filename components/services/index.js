import tw from 'tailwind-styled-components'
import ServiceList from './ServiceList'
import { useSelector } from 'react-redux'

const ServiceSection = tw.section`py-7 lg:py-14`
const Container = tw.div`container`
const Row = tw.div`grid md:grid-cols-2 gap-5`

const Services = () => {
    const services = useSelector((state) => state.services)

    return (
        <ServiceSection>
            <Container>
                <Row>
                    {services.map((service) => (
                        <ServiceList key={service.id} service={service} />
                    ))}
                </Row>
            </Container>
        </ServiceSection>
    )
}

export default Services
