import Link from 'next/link'
import tw from 'tailwind-styled-components'
import { RxMoon } from 'react-icons/rx'
import { MdOutlineLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { useEffect, useState } from 'react'

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
]

export const Header = tw.header`supports-backdrop-blur:bg-white/60 sticky top-0 z-40 flex py-[20px] w-full items-center border-b  bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 border-slate-900/10`
export const Container = tw.div`container flex items-center justify-between`
export const Logo = tw.div`text-3xl relative font-bold dark:text-slate-50 text-slate-900`
export const NavUl = tw.ul`flex gap-5`
export const NavLink = tw.span`text-base font-semibold tracking-wider marker:hover:text-sky-500 dark:hover:text-sky-400`
const ButtonGroup = tw.div`flex items-center gap-2 px-2`

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeChangerUI = () => {
        if (!mounted) return null
        const currentTheme = theme === 'system' ? systemTheme : theme
        if (currentTheme === 'dark') {
            return <MdOutlineLightMode className='cursor-pointer' fontSize={25} onClick={() => setTheme('light')} />
        } else {
            return <RxMoon className='cursor-pointer' fontSize={25} onClick={() => setTheme('dark')} />
        }
    }

    return (
        <Header>
            <Container>
                <Logo>Mern Dev</Logo>
                <nav className='hidden lg:flex lg:flex-1 lg:justify-center'>
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
                <ButtonGroup>
                    {themeChangerUI()}
                    <button>
                        <HiOutlineMenuAlt1 className='cursor-pointer' fontSize={28} />
                    </button>
                </ButtonGroup>
            </Container>
        </Header>
    )
}

export default Navbar
