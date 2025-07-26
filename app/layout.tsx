import './globals.css'
import './globals.css'

export const metadata = {
  title: 'Al-Ebil | Game I`rab',
  description: 'Bantu Ebil menjawab soalan i`rab!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  )
}
