"use client";

import authStyle from '../(style)/Auth.module.css'
import headStyle from '../(style)/Header.module.css'

import Image from "next/image";
import googleLogo from "../../public/images/google.png";
import githubLogo from "../../public/images/github.png";
import { signIn, signOut } from "next-auth/react";

export function SignOutButton() {
    const handleClick = () => {
        signOut()
    };
    return (
        <button className={headStyle.headerlinklog} onClick={handleClick}>
        Logout
        </button>
    )
}

export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google");
    };
    return (
        <button onClick={handleClick} className={authStyle.authbutton}>
            <Image src={googleLogo} alt="Google Logo" width={20} height={20} />
            <p>&nbsp;&nbsp; Continue with Google</p>
        </button>
    );
}

export function GithubSignInButton() {
    const handleClick = () => {
        signIn("github");
    };
    return (
        <button
        onClick={handleClick}
        className={authStyle.authbutton}
        >
        <Image src={githubLogo} alt="Github Logo" width={20} height={20} />
        <p>&nbsp;&nbsp; Continue with Github</p>
        </button>
    );
}

export function CredentialsSignInButton() {
    const handleClick = () => {
        signIn();
    };
    return (
        <button
        onClick={handleClick}
        >
        {/* <Image src={githubLogo} alt="Github Logo" width={20} height={20} /> */}
        <span>Continue with account</span>
        </button>
    );
}