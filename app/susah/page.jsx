'use client'

import { useState } from 'react'

const soalan = [
  {
    ayat: 'إِنَّمَا بُعِثْتُ لِمَكَارِمِ الْأَخْلَاقِ',
    maksud: 'Sesungguhnya aku diutus untuk menyempurnakan akhlak',
    target: 'لِمَكَارِمِ',
    jawapan: 'لَامُ الْجَرّ',
    jenis: 'مَجْرُور',
    golongan: 'اِسْم مَجْرُور وَعَلَامَةُ جَرِّهِ الْفَتْحَة'
  }
]

export default function Susah() {
  const [step, setStep] = useState(0)
  const [stage, setStage] = useState(0)
  const [markah, setMarkah] = useState(0)
  const [jawapan, setJawapan] = useState('')

  const semak = () => {
    const q = soalan[step]
    const betul =
      (stage === 0 && jawapan === q.jawapan) ||
      (stage === 1 && jawapan === q.jenis) ||
      (stage === 2 && jawapan === q.golongan)

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
      alert('Jawapan salah. Sila cuba lagi.')
    }
  }

  if (step >= soalan.length) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold">✅ Tamat!</h1>
        <p className="mt-2">Anda telah habiskan mod Susah.</p>
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
        className="px-4 py-2 rounded text-black w-full"
        value={jawapan}
        onChange={e => setJawapan(e.target.value)}
        placeholder={
          stage === 0 ? 'Contoh: لَامُ الْجَرّ' :
          stage === 1 ? 'Contoh: مَجْرُور' :
          'Contoh: اِسْم مَجْرُور وَعَلَامَةُ جَرِّهِ الْفَتْحَة'
        }
      />

      <button
        onClick={semak}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl"
      >
        Semak
      </button>

      <p className="mt-4">Markah: {markah}</p>
    </div>
  )
}
