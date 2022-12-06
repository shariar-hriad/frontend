import Image from 'next/image'
import tw from 'tailwind-styled-components'
import img from '../../public/bannerImage.png'
import Details from './Details'

const Banner = tw.section`py-7 lg:py-14 relative`
const Container = tw.div`container`
const Row = tw.div`flex flex-col gap-3 lg:flex-row lg:items-center`
const Column = tw.div`flex-1 text-center lg:text-left`
// const Filter = tw.div`absolute top-1/2  left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-backdrop-filter blur-[72px] opacity-[0.7] -z-10`
const Filter = tw.div`absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-backdrop-filter blur-[72px] opacity-[0.8] -z-10`

const BannerSection = () => {
    return (
        <Banner>
            <Container>
                <Row>
                    <Details />
                    <Column className='relative flex h-full w-full items-center justify-center'>
                        <Image src={img} alt='Modern Technology' priority />
                        {/* className='absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 */}
                    </Column>
                </Row>
            </Container>
            <Filter />
        </Banner>
    )
}

export default BannerSection
