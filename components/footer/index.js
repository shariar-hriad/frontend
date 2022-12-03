import tw from 'tailwind-styled-components';

const FooterSection = tw.footer`border-t border-slate-50/10 h-[50px] flex items-center`;
const Container = tw.div`container`;
const Copyright = tw.p`text-[14px] text-center text-slate-500`;

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <Copyright>
                    &copy;All rights reserved: <i>Shariar Hossain Riad</i>
                </Copyright>
            </Container>
        </FooterSection>
    );
};

export default Footer;
