import { useState } from "react";
import { cn } from "@/lib/utils";

const harakatList = [
  { label: "Ḍammah", symbol: "ُ" },
  { label: "Fatḥah", symbol: "َ" },
  { label: "Kasrah", symbol: "ِ" },
  { label: "Sukūn", symbol: "ْ" },
];

const sampleQuestion = {
  sentence: [
    { text: "ذَهَبَ", baris: "َ" },
    { text: "الـمُعَلِّم", baris: "" }, // Target word (no baris)
    { text: "إِلَى", baris: "َ" },
    { text: "الـمَدْرَسَةِ", baris: "ِ" },
  ],
  answerHarakah: "ِ", // Kasrah
  i3rab: "Majrūr",
};

export default function EasyQuestion() {
  const [selectedHarakah, setSelectedHarakah] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [stage, setStage] = useState("harakah");
  const [feedback, setFeedback] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const harakah = e.dataTransfer.getData("harakah");
    setSelectedHarakah(harakah);
    setFeedback(null);
  };

  const handleDragStart = (e, harakah) => {
    e.dataTransfer.setData("harakah", harakah);
  };

  const handleConfirm = () => {
    if (selectedHarakah === sampleQuestion.answerHarakah) {
      setStage("i3rab");
    } else {
      setFeedback("Jawapan salah. Cuba lagi!");
    }
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl mb-4">Soalan Mudah: Pilih Baris</h1>

      <div className="text-4xl space-x-4 mb-6" onDragOver={(e) => e.preventDefault()} onDrop={handleDrop}>
        {sampleQuestion.sentence.map((word, i) => (
          <span
            key={i}
            className={cn(
              "inline-block border-b-4 border-dotted px-2",
              word.baris === "" && "border-white"
            )}
          >
            {word.text}
            {word.baris || (i === 1 && selectedHarakah ? selectedHarakah : "")}
          </span>
        ))}
      </div>

      {stage === "harakah" && (
        <>
          <div className="flex gap-4 mb-4">
            {harakatList.map((h) => (
              <div
                key={h.symbol}
                draggable
                onDragStart={(e) => handleDragStart(e, h.symbol)}
                className="cursor-grab bg-white text-black px-4 py-2 rounded-lg shadow-lg"
              >
                {h.label}
              </div>
            ))}
          </div>
          {selectedHarakah && !confirmed && (
            <button onClick={handleConfirm} className="mt-4 bg-blue-500 px-6 py-2 rounded shadow">
              Sahkan
            </button>
          )}
          {feedback && <p className="text-red-400 mt-2">{feedback}</p>}
        </>
      )}

      {stage === "i3rab" && (
        <div className="mt-6">
          <h2 className="text-xl mb-4">Apakah i'rab bagi kalimah ini?</h2>
          <div className="flex gap-4 justify-center">
            {["Marfū‘", "Manṣūb", "Majrūr", "Majzūm"].map((i3) => (
              <button
                key={i3}
                onClick={() => alert(i3 === sampleQuestion.i3rab ? "Betul!" : "Salah!")}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
              >
                {i3}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
