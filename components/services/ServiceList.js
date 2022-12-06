import tw from 'tailwind-styled-components'

const Column = tw.div`border dark:border-slate-50/10 p-[15px] dark:bg-[#1B1B1B]`
const Title = tw.h3`text-[22px] font-semibold text-slate-900 dark:text-slate-50 mb-[10px]`
const Description = tw.p`text-[16px] text-slate-800 dark:text-slate-400`

export default function ServiceList({ service }) {
    return (
        <Column>
            {/* <service.icon /> */}
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
        </Column>
    )
}
