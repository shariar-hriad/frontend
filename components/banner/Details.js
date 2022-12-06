import tw from 'tailwind-styled-components'
import Link from 'next/link'

const Column = tw.div`flex-1`
const GradientText = tw.div`bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text capitalize text-transparent`
const SubTitle = tw.div`mb-3 text-lg tracking-wide text-[#FCFCFC] lg:mb-5 lg:text-2xl`
const Title = tw.div`mb-6 text-4xl font-bold dark:text-[#FCFCFC] text-slate-900 lg:text-5xl xl:text-6xl xl:leading-[70px] lg:leading-[60px]`
const Description = tw.div`mb-5 text-lg tracking-wide dark:text-[#F2F3F5] text-slate-800`
const ButtonGroup = tw.div`flex gap-2`

export default function Details() {
    return (
        <Column>
            <SubTitle>Hello, there...</SubTitle>
            <Title>
                Let&apos;s build your <GradientText className=''>next buisness website</GradientText>
                with all the latest technology.
            </Title>
            <Description>
                Front-end developer with great experience.Familiar with React, Express js, mongodb, NextJs, Sass. Also expert in Pixel-Perfect Responsive Website from your design to HTML.
            </Description>
            <ButtonGroup>
                <Link href='/' className='border bg-gradient-to-r from-pink-500 to-violet-500 py-3 px-5 font-semibold tracking-widest text-slate-800 dark:text-slate-50'>
                    Hire me!
                </Link>
                <Link
                    href='/'
                    className='border bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text py-3 px-5 font-semibold capitalize tracking-widest text-slate-800 text-transparent dark:text-slate-50'
                >
                    Projects
                </Link>
            </ButtonGroup>
        </Column>
    )
}
