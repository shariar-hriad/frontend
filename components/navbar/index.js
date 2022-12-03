import Link from 'next/link';
import tw from 'tailwind-styled-components';

const navlinks = [
    {
        path: '/',
        link: 'Home',
    },
    {
        path: '/about',
        link: 'About',
    },
    {
        path: '/portfolio',
        link: 'Portfolio',
    },
    {
        path: '/contact',
        link: 'Contact',
    },
];

export const Header = tw.header`supports-backdrop-blur:bg-white/60 sticky top-0 z-40 flex h-[60px] w-full items-center border-b  bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-slate-900/10`;
export const Container = tw.div`container flex items-center justify-between`;
export const Logo = tw.div`text-3xl relative font-bold text-slate-50`;
export const NavUl = tw.ul`flex gap-5`;
export const NavLink = tw.span`text-base font-semibold tracking-wider marker:hover:text-sky-500 dark:hover:text-sky-400`;

const Navbar = () => {
    return (
        <Header>
            <Container>
                <Logo>Mern Dev</Logo>
                <nav>
                    <NavUl>
                        {navlinks.map((navlink) => (
                            <li key={navlink.link}>
                                <Link href={navlink.path}>
                                    <NavLink>{navlink.link}</NavLink>
                                </Link>
                            </li>
                        ))}
                    </NavUl>
                </nav>
            </Container>
        </Header>
    );
};

export default Navbar;
