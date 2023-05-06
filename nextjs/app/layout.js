import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header';
import Footer from './footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portpolio',
  description: 'kimjongyun portpolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className + " g_font"}>
        <Header/>
        <divs>
          {children}
        </divs>
        <Footer/>
      </body>
    </html>
  )
}
