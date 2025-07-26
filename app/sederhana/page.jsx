'use client'

import { useState } from 'react'

const soalan = [
  {
    ayat: 'أسكن في حدود البلدين',
    maksud: 'Aku tinggal di sempadan dua negara',
    target: 'البلدين',
    jawapan: 'بِالْيَاءِ',
    jenis: 'مَجْرُور',
    golongan: 'مُضَاف إِلَيْهِ'
  },
  {
    ayat: 'لم أذهب إلى المدينة',
    maksud: 'Aku tidak pergi ke bandar',
    target: 'أذهب',
    jawapan: 'سُكُون',
    jenis: 'مَجْزُوم',
    golongan: 'فِعْل مُضَارِع مَجْزُوم بِـ "لَمْ"'
  }
]

export default function Sederhana() {
  const [step, setStep] = useState(0)
  const [stage, setStage] = useState(0)
  const [markah, setMarkah] = useState(0)
  const [jawapan, setJawapan] = useState('')

  const semak = () => {
    const betul =
      (stage === 0 && jawapan === soalan[step].jawapan) ||
      (stage === 1 && jawapan === soalan[step].jenis) ||
      (stage === 2 && jawapan === soalan[step].golongan)

    if (betul) {
      if (stage < 2) {
        setStage(stage + 1)
        setJawapan('')
      } else {
        setMarkah(markah + 1)
        setStage(0)
        setStep(step + 1)
        setJawapan('')
      }
    } else {
      alert('Jawapan salah! Cuba lagi.')
    }
  }

  if (step >= soalan.length) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">🎉 Hebat!</h1>
        <p className="mt-2">Anda telah tamatkan semua soalan dalam mod Sederhana.</p>
        <p className="mt-2">Markah: {markah} / {soalan.length}</p>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Soalan {step + 1}</h2>
      <p><strong>Ayat:</strong> {soalan[step].ayat}</p>
      <p><strong>Maksud:</strong> {soalan[step].maksud}</p>
      <p><strong>Kalimah:</strong> {soalan[step].target}</p>

      <input
        className="px-4 py-2 rounded text-black"
        value={jawapan}
        onChange={e => setJawapan(e.target.value)}
        placeholder={
          stage === 0 ? 'Tulis baris (Contoh: بِالْيَاءِ)' :
          stage === 1 ? 'Jenis i‘rab (Contoh: مَجْرُور)' :
          'Golongan (Contoh: مُضَاف إِلَيْهِ)'
        }
      />

      <button
        onClick={semak}
        className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-xl"
      >
        Semak
      </button>

      <p className="mt-4">Markah: {markah}</p>
    </div>
  )
}
