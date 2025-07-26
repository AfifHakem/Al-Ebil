'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 text-center p-4">
      <h1 className="text-4xl md:text-5xl font-bold">🐪 Al-Ebil</h1>
      <p className="text-lg md:text-xl max-w-md">
        Bantu Ebil si unta menjawab soalan I‘rab untuk menakluk padang pasir ilmu!
      </p>
      <div className="flex gap-4 mt-4">
        <Link href="/mudah" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-2xl shadow-md">
          مود
        </Link>
        <Link href="/sederhana" className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-2xl shadow-md">
          متوسط
        </Link>
        <Link href="/susah" className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-2xl shadow-md">
          صعب
        </Link>
      </div>
    </main>
  )
}
