'use client';
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";
import axios from 'axios';

export default function Home() {
  const [inputText, setInputText] = useState<string>('');
  const [processedText, setProcessedText] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://18.222.205.222/process', {
        text: inputText
      });
      setProcessedText(response.data.processed_text);
    } catch (error) {
      console.error("API request failed:", error);
    }
  };

  return (
    <div>
      <h1>Text Processing App</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Submit</button>

      {processedText && (
        <div>
          <h2>Processed Text:</h2>
          <p>{processedText}</p>
        </div>
      )}
    </div>
  );
}
