import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Al-Ebil | I‘rab Game',
  description: 'Permainan i‘rab interaktif bersama Ebil si unta'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar">
      <body dir="rtl" className="bg-neutral-900 text-white font-sans">
        {children}
      </body>
    </html>
  )
}
