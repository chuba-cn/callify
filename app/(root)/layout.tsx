import React, { ReactNode } from 'react'
import StreamVideoProvider from '@/providers/StreamClientProviders'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Callify",
  description: "A Video Conferencing Tool",
  icons:{
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <StreamVideoProvider>
      {children}
    </StreamVideoProvider>
  )
}

export default RootLayout