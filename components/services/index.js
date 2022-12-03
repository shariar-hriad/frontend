import { FaCode } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import tw from 'tailwind-styled-components';
import ServiceList from './ServiceList';

const services = [
    { id: 1, icon: FaCode, title: 'Front-end Development', description: 'Front-end Development with Modern Technology like React, NextJs' },
    { id: 2, icon: MdDesignServices, title: 'Static Site Development', description: 'Static Site generation with HTML5,CSS3,Js,jQuery,Sass,Bootstrap,Tailwind CSS' },
];

const ServiceSection = tw.section`py-7 lg:py-14`;
const Container = tw.div`container`;
const Row = tw.div`flex gap-5`;

const Services = () => {
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
    );
};

export default Services;
