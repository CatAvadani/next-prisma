'use client';
import { signIn } from 'next-auth/react';

export default function SinginButton() {
  return <button onClick={() => signIn()}>Sign In</button>;
}
