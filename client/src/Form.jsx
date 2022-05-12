import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  FormLabel,
  Textarea,
  Button,
  FormControl,
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function CustomForm({ handleSubmit, isLoading, setIsLoading }) {
  const [value, setValue] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [storedTranscript, setStoredTranscript] = useState("");
  const [voiceCommand, setVoiceCommand] = useState(false);

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    if (transcript !== "") {
      console.log(transcript);
      setStoredTranscript(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    if (voiceCommand === "start") {
      SpeechRecognition.startListening();
      setTimeout(() => {
        setVoiceCommand("end");
        SpeechRecognition.stopListening();
      }, 5000);
    }
    if (voiceCommand === "end") {
      const input = storedTranscript;
      console.log(input);
      SpeechRecognition.stopListening();
      const processInput = input.trim();
      if (processInput === "") {
        console.log("nothing detected from mic");
        resetTranscript();
        return;
      }
      handleSubmit(processInput, resetTranscript);
    }
  }, [voiceCommand]);

  return (
    <>
      <Button onClick={() => setVoiceCommand("start")} mb="1rem">
        Try voice command
      </Button>
      <p>Command: {transcript}</p>
      <Heading mb="1rem" as="h3" size="md">
        Or
      </Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const processInput = value.trim();
          if (processInput === "") {
            setValue("");
            return;
          }
          setIsLoading(true);
          handleSubmit(processInput, setValue);
        }}
      >
        <FormControl>
          <FormLabel htmlFor="prompt">Enter prompt manually:</FormLabel>
          <Textarea
            id="prompt"
            value={value}
            onChange={(e) => handleInputChange(e)}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
          <Flex justify="flex-end" mt="0.5rem">
            <Button
              isLoading={isLoading}
              loadingText="Processing"
              spinnerPlacement="end"
              type="submit"
              colorScheme="telegram"
              variant="outline"
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
}
