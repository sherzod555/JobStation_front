import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
    const router = useRouter()
    const [token, setToken] = useState()
    const [user, setUser] = useState()
    useEffect(() => {
        setUser(typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || JSON.stringify("")) : "")
        setToken(typeof window !== "undefined" ? JSON.parse(localStorage?.getItem('token') || JSON.stringify("")) : '')
    }, [router.pathname])

    return (
        <header className="site-navbar mt-3">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="site-logo col-6">
                        <Link href='/'>
                            <a className={['/search/resume', '/search/vacancies'].includes(router.pathname) ? 'text-dark' : ''}>JobStation</a>
                        </Link>
                    </div>
                    <nav className="mx-auto site-navigation">
                        <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                            <li>
                                <Link href='/'>
                                    <a className="nav-link">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/about'>
                                    <a>About</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href='/contacts'>
                                    <a>Contact</a>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                    <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                        <div className="ml-auto">
                            {user && <Link href={user?.user_role === 'employer' ? '/post-job' : '/post-resume'}>
                                <a
                                    className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"
                                >
                                    <span className="mr-2 icon-add" />
                                    {user?.user_role === 'employer' ? 'Post a Job' : 'Post a resume'}
                                </a>
                            </Link>}
                            <Link href={!token ? '/auth/login' : '/profile'}>
                                <a
                                    className="btn btn-primary border-width-2 d-none d-lg-inline-block ml-3"
                                >
                                    <span className="mr-2 icon-lock_outline" />
                                    {token ? 'profile' : 'Sing-in / sing-up'}
                                </a>
                            </Link>
                            {
                                token && <button
                                    className="btn btn-primary border-width-2 d-none d-lg-inline-block ml-3"
                                    onClick={() => {
                                        localStorage.clear()
                                        router.push('/')
                                    }}
                                >
                                    Log out
                                </button>
                            }
                        </div>
                        <a
                            className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
                        >
                            <span className="icon-menu h3 m-0 p-0 mt-2" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
