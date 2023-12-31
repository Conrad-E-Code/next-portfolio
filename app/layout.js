import NavBar from '/components/UI/NavBar'

import LayoutWrapper from "/components/blog/LayoutWrapper"
import '/styles/globals.css'
import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { ContextProvider } from '/context/Context'
const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({
  subsets: ['latin']
})

export const metadata = {
  title: 'Conrad Etherington',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
      <body style={{backgroundColor: "#1f2937"}} className={inter.className}>

        <NavBar/>
        {children}
        <LayoutWrapper />
      </body>
      </ContextProvider>
    </html>
  )
}
