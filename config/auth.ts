import dbconnect from './database'
import UserModel from '../models/User'

import { NextAuthOptions, getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { redirect, useRouter } from 'next/navigation'

import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

interface User {
  name: string;
  username: string;
  email: string;
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        username: { label: 'username', type: 'string', placeholer: 'username' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password)
          return null;
        await dbconnect()
        const dbUser = await UserModel.findOne({username: credentials.username})
        // Password is not encrypted right now
        // Insert encryption in here
        const encrypt = 'lalala'
        if (dbUser && dbUser.password === credentials.password) {
          // const { _id, password, createdAt, updatedAt, userLink, ...dbUserWithoutPassword } = dbUser;
          // // console.log(dbUserWithoutPassword)
          // return dbUserWithoutPassword as User
          return dbUser
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};


export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  if (!session) return redirect("/login");
}

export function loginIsRequiredClient() {
  if (typeof window !== "undefined") {
    const session = useSession();
    const router = useRouter();
    if (!session) router.push("/login");
  }
}