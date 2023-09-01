import React, { useState } from "react"

import { VStack, Flex, Textarea } from "@chakra-ui/react"
import { BellIcon } from '@chakra-ui/icons'

import { MicroStartIcon } from "./MicroStart";
import { MicroStopIcon } from "./MicroStop";

export default function VoiceToTextBlock({ setTextVoice }) {
  const [transcription, setTranscription] = useState('');
  const [record, setRecord] = useState(false)

  const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition(); // Создаем экземпляр объекта распознавания речи



  recognition.continuous = false; // Непрерывное распознавание отключено, будет производиться однократное распознавание

  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    setTranscription(transcript);
    setTextVoice(transcript)
  };

  const startRecognition = () => {
    try {
      // Проверка состояния перед вызовом start
      if (recognition.readyState !== 'listening') {
        recognition.start();
        console.log("Запись началась");
        console.log("▶ ⇛ recognition.readyState:", recognition.readyState);
        setRecord(true)
      } else {
        console.log('Recognition is already active.');
      }
    } catch (error) {
      recognition.stop()
      console.log("▶ ⇛ recognition.STOP:", recognition.readyState);

    }

  };

  return (
    <VStack>
      <button onClick={startRecognition}>
        <MicroStartIcon></MicroStartIcon>
        <MicroStopIcon></MicroStopIcon>
      </button>
      <p>Распознанная фраза: {transcription}</p>
    </VStack>
  );
}

