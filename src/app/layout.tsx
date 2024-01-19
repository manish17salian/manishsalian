import { Poppins } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Manish Salian',
  description: 'Personal Portfolio',
  icons: {
    icon: './icon.ico', // /public path
  },
}

const poppins = Poppins({weight: "200", subsets: ['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Manish Salian</title>
      </Head>
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  )
}
