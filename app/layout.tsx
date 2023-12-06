import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Accelerator',
  description: 'A complete clone of the webpage https://accelerator.github.com/ as it stands on December 6th, 2023.',
  icons: {
    icon: "https://accelerator.github.com/favicon-16x16.png"
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="content">
          <NavBar />
          <main>
            <section>
              {children}
            </section>
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
