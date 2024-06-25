import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import { ReduxProvider } from '@/redux/provider'
import Footer from '@/components/Footer'
 const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Vasyliev's Blog",
  description: 'Personal blog of Vasyliev Dmytro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style= {{scrollBehavior: "smooth"}}>
      
      <body className="bg-fixed bg-cover" style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <NavBar /> 
        {children}
        {/* <iframe src="https://scratch.mit.edu/projects/933457919/embed" allowTransparency={true} width="485" height="402" frameBorder="0" scrolling="no" allowFullScreen></iframe> */}
        <Footer />
        
      </body>
    </html>
  )
}
