import tw from 'tailwind-styled-components';

const Column = tw.div`flex-1 border border-slate-50/10 p-[35px]`;
const Title = tw.h3`text-[22px] font-semibold text-slate-50 mb-[10px]`;
const Description = tw.p`text-[16px] text-slate-400`;

export default function ServiceList({ service }) {
    return (
        <Column>
            <service.icon fontSize={42} className='mb-5' />
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
        </Column>
    );
}
