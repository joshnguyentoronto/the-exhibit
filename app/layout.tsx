import './global.css'
import headStyle from './(style)/Header.module.css'
import footStyle from './(style)/Footer.module.css'
import centerStyle from './(style)/Center.module.css'
import { SignOutButton } from './components/authButtons'

import Link from 'next/link';
import { getServerSession } from "next-auth/next"
import { NextAuthProvider } from "./providers";
import { signOut } from "next-auth/react";
import { authConfig } from "../config/auth";
import { redirect } from "next/navigation";



export default async function RootLayout({children}: {children: React.ReactNode}) {
    const session = await getServerSession(authConfig);
    return (
        <html lang="en">
            <body>
                    <NextAuthProvider>
                        <main>
                            <header>
                                <div className={headStyle.header}>
                                    <div>
                                        <Link className={headStyle.headericon} href="/"><img  className={headStyle.headericonimage} src='/icons/home.svg' alt="svg icon" /><h1>THE EXHIBIT</h1></Link>
                                    </div>
                                    <div className={headStyle.headerlinkcontainer}>
                                        { session && <Link className={headStyle.headerlinkupload} href="/upload">Upload</Link> }
                                        { session && <Link href="/profile" className={headStyle.headerProfile} ><img src={session?.user?.image}></img></Link> }
                                        { session && <SignOutButton></SignOutButton> }
                                    </div>
                                </div>
                            </header>
                            <div className={centerStyle.main}>
                                {children}
                            </div>
                            
                            <footer>
                                <div className={footStyle.footer}>
                                    <div className={footStyle.footer1}>
                                        <div className={footStyle.footermain}>
                                            <h1>THE EXHIBIT</h1>
                                            <p>Show case your work, connect<br/> with employers, get hired.</p>
                                            <div className={footStyle.footermainsocial}>
                                                <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img src='/icons/facebook-btn.svg' alt="social media svg icon" /></a>
                                                <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><img src='/icons/twitter-btn.svg' alt="social media svg icon" /></a>
                                                <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><img src='/icons/linkedin-btn.svg' alt="social media svg icon" /></a>
                                                <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img src='/icons/insta-btn.svg' alt="social media svg icon" /></a>
                                                <a href="http://pinterest.com" target="_blank" rel="noopener noreferrer"><img src='/icons/pin-btn.svg' alt="social media svg icon" /></a>
                                            </div>
                                        </div>
                                        <div className={footStyle.footergroup1}>
                                            <ul>
                                                <li><strong>Company</strong></li>
                                                <li><a href="https://github.com/joshnguyentoronto/the-exhibit" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                                <li><Link href="/about">About</Link></li>
                                                <li><Link href="/about">FAQs</Link></li>
                                                <li><Link href="/about">Career</Link></li>
                                                <li><Link href="/about">Support</Link></li>
                                                <li><Link href="/term">Terms of Service</Link></li>
                                                <li><Link href="/policy">Privacy Policy</Link></li>
                                            </ul>
                                        </div>
                                        <div className={footStyle.footergroup2}>
                                            <ul>
                                                <li><strong>My account</strong></li>
                                                <li><Link href="/login">Login</Link></li>
                                                <li><Link href="/login">Register</Link></li>
                                                <Link href="/profile">Profile</Link>
                                                <Link href="/profile">Favourites</Link>
                                            </ul>
                                        </div>
                                        <div className={footStyle.footeremail}>
                                            <p><strong>Join Our Email List</strong></p>
                                            <p>Get weekly emails with trending projects!</p>
                                            <form className={footStyle.footerform}>
                                                <input type="email" required />
                                                <button>Sign up</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className={footStyle.footer2}>
                                        <p>© The Exhibit 2022</p>
                                    </div>
                                </div>
                            </footer>
                        </main>
                    </NextAuthProvider>
            </body>
        </html>
    )
}