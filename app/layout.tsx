import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="min-h-screen relative">
          <Navbar />
          <div className="pb-[10rem]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
