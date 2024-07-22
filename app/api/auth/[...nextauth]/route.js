import NextAuth from 'next-auth'
//import AppleProvider from 'next-auth/providers/apple'
//import FacebookProvider from 'next-auth/providers/facebook'
//import GoogleProvider from 'next-auth/providers/google'
//import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDB';




export const authoptions= NextAuth({
    providers: [
      // OAuth authentication providers...
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    //  AppleProvider({
    //    clientId: process.env.APPLE_ID,
    //    clientSecret: process.env.APPLE_SECRET
    //  }),
   //   FacebookProvider({
    //    clientId: process.env.FACEBOOK_ID,
     //   clientSecret: process.env.FACEBOOK_SECRET
    //  }),
    //  GoogleProvider({
     //   clientId: process.env.GOOGLE_ID,
    //    clientSecret: process.env.GOOGLE_SECRET
     // }),
      // Passwordless / email sign in
     // EmailProvider({
     //   server: process.env.MAIL_SERVER,
     //   from: 'NextAuth.js <no-reply@example.com>'
     // }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        if(account.provider=="github"){
          //connect to the database
          await connectDB()
          //check if the user already exists in the database
          const currentuser=await User.findOne({email:email})
          console.log(currentuser)
          if(!currentuser){
            const newUser=await User.create({
            email:user.email,
            username:user.email.split("@")[0],
            
          })
         
          
          user.name=newUser.username
          
          
          }
          else{
            user.name=currentuser.username 
          }
         return true
        }
      },
     async session({ session, token, user }) {
      const dbUser=await User.findOne({email:session.user.email})
      console.log(dbUser)
      session.user.name=dbUser.username
       return session
     },
    }
  })
  export {authoptions as GET,authoptions as POST}