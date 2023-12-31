"use client";

import style from '../(style)/Auth.module.css'

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CredentialsFormProps {
    csrfToken?: string;
}

export function CredentialsForm(props: CredentialsFormProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
        username: data.get("username"),
        password: data.get("password"),
        redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
        //Redirect to homepage (/timeline)
        router.push("/");
        } else {
        console.log("Error: ", signInResponse);
        setError("Your Username or Password is wrong!");
        }
    };

    return (
        <form
        onSubmit={handleSubmit}
        className={style.form}
        >
        {error && (
            <span>
            {error}
            </span>
        )}
        <input
            type="string"
            name="username"
            placeholder="username"
            required
            className={style.forminput}
        />

        <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={style.forminput}
        />

        <button
            type="submit"
        >
            Log in
        </button>
        </form>
    );
}