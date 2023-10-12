import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Link from 'next/link';
// Auth import
import {
    CredentialsSignInButton,
    GithubSignInButton,
    GoogleSignInButton,
} from "../components/authButtons";
import { getServerSession } from "next-auth";
import { authConfig } from "../../config/auth";
import { redirect } from "next/navigation";
import { CredentialsForm } from "../components/credentialsForm";
import { getCsrfToken } from "next-auth/react";


import dbconnect from '../../config/database';
import User from '../../models/User';
import style from './Login.module.css'




export default async function Login() {
    const session = await getServerSession(authConfig);
    if (session) return redirect("/");

    return (
        <div className={style.LoginPage}>
            <h1>THE EXHIBIT</h1>
            <div className={style.LoginForm}>
                <div >
                    <div >
                        <h1>Sign In</h1>
                        <GoogleSignInButton />
                        <GithubSignInButton />
                        <span>
                            Or
                        </span>
                        {/* <CredentialsSignInButton /> */}
                        <CredentialsForm />
                    </div>
                </div>
            </div>
        </div>
    )
}