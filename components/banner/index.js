import Image from 'next/image';
import tw from 'tailwind-styled-components';
import carbon from '../../public/carbon.svg';
import Details from './Details';

const Banner = tw.section`py-7 lg:py-14`;
const Container = tw.div`container`;
const Row = tw.div`flex flex-col gap-3 lg:flex-row lg:items-center`;
const Column = tw.div`flex-1 text-center lg:text-left`;

const BannerSection = () => {
    return (
        <Banner>
            <Container>
                <Row>
                    <Details />
                    <Column className=''>
                        <Image src={carbon} alt='Modern Technology' />
                    </Column>
                </Row>
            </Container>
        </Banner>
    );
};

export default BannerSection;
