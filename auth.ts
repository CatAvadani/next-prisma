import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import apple from 'next-auth/providers/apple';
import discord from 'next-auth/providers/discord';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';
import { db } from './prisma/db';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [github, discord, apple, google],
});
