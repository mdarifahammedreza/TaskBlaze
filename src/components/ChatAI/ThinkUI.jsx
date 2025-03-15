'use client';
import { useEffect, useState } from "react";

export default function ThinkTextDisplay({ thinkTexts = [] }) {  // Default to empty array
  const [visible, setVisible] = useState(true);
console.log("thinkTexts", thinkTexts);
  useEffect(() => {
    if (thinkTexts.length > 0) {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000); // Hide after 5 seconds
    }
  }, [thinkTexts]);

  if (!visible || thinkTexts.length === 0) return null;

  return (
    <div className="fixed bottom-10 left-10 p-4 bg-gray-900 border border-cyan-500 rounded-xl shadow-xl animate-fade-in">
      <h3 className="text-cyan-400 text-lg font-semibold">AI's Thought:</h3>
      <div className="text-gray-300 text-sm mt-2 space-y-1">
        {thinkTexts.map((text, index) => (
          <p key={index} className="italic opacity-80">{text}</p>
        ))}
      </div>
    </div>
  );
}
