import React, { useEffect, useState } from "react";
import "./index.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  FormLabel,
  Textarea,
  Button,
  FormControl,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";

export default function CustomForm({ handleSubmit, isLoading, setIsLoading }) {
  const [value, setValue] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [storedTranscript, setStoredTranscript] = useState("");
  const [voiceCommand, setVoiceCommand] = useState(false);
  const [detect, setDetect] = useState("");
  const [showTranscript, setShowTranscript] = useState("hideVoiceOrb");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  useEffect(() => {
    let timer1;
    if (transcript !== "") {
      timer1 = setTimeout(() => {
        setVoiceCommand("end");
        SpeechRecognition.stopListening();
      }, 2000);
      console.log(transcript);
      setStoredTranscript(transcript);
      setDetect("detectInput");
    }
    return () => clearTimeout(timer1);
  }, [transcript]);

  useEffect(() => {
    if (voiceCommand === "start") {
      setShowTranscript("spawnVoiceOrb");
      setDetect("listening");
      SpeechRecognition.startListening();
      // setTimeout(() => {
      //   setVoiceCommand("end");
      //   SpeechRecognition.stopListening();
      // }, 5000);
    }
    if (voiceCommand === "end") {
      setDetect("");
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
      setShowTranscript("despawnVoiceOrb");
    }
  }, [voiceCommand]);

  useEffect(() => {
    if (detect === "detectInput") {
      setTimeout(() => {
        setDetect("listening");
      }, 75);
    }
  }, [detect]);

  return (
    <div className="form">
      <Button
        onClick={() => setVoiceCommand("start")}
        mt="1rem"
        mb="1rem"
        backgroundColor="#0d262f"
        color="white"
        _hover={{
          backgroundColor: "lightblue",
          color: "black",
        }}
      >
        Try voice command
      </Button>
      <Flex justify="center" className={showTranscript}>
        <div id="micIndicator" className={detect}></div>
        <Text ml="20px" width="90%">
          Command: <span className="response">{transcript}</span>
        </Text>
      </Flex>
      <Heading
        mt="0.5rem"
        mb="2rem"
        as="h3"
        size="lg"
        backgroundColor="whiteAlpha.500"
        width="fit-content"
        borderRadius="5px"
        padding="3px"
      >
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
          <FormLabel
            htmlFor="prompt"
            fontWeight="700"
            fontSize="1.25rem"
            backgroundColor="whiteAlpha.500"
            width="fit-content"
            borderRadius="5px"
            padding="3px"
          >
            Enter prompt manually:
          </FormLabel>
          <Textarea
            id="prompt"
            value={value}
            onChange={(e) => handleInputChange(e)}
            placeholder="What can the AI master do for you?"
            size="sm"
            color="black"
            fontWeight="600"
            background="whiteAlpha.500"
            _hover={{
              backgroundColor: "#c3cca7",
            }}
            _focus={{
              backgroundColor: "#c3cca7",
            }}
          />
          <Flex justify="flex-end" mt="0.5rem">
            <Button
              isLoading={isLoading}
              loadingText="Processing"
              spinnerPlacement="end"
              type="submit"
              backgroundColor="#0d262f"
              color="white"
              _hover={{
                backgroundColor: "lightblue",
                color: "black",
                boxShadow: "0 0 3px 3px black",
              }}
              _focus={{
                backgroundColor: "lightblue",
                color: "black",
              }}
              _disabled={{
                opacity: "0.9",
              }}
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </form>
    </div>
  );
}
