import "./App.css";
import Form from "./Form";
import { ResponseList } from "./ResponseList";
import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState(null);

  const submitForm = (userInput, setInput) => {
    const processInput = userInput.trim();

    if (processInput === "") {
      setInput("");
      return;
    }
    const API_KEY = process.env.REACT_APP_API_KEY;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
    const data = {
      prompt: processInput,
      temperature: 0.7,
      max_tokens: 25,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
    axios
      .post(
        "https://api.openai.com/v1/engines/text-curie-001/completions",
        data,
        {
          headers: headers,
        }
      )
      .then((response) => {
        const aiResponse = response.data.choices[0].text;
        console.log(aiResponse);
        setResponse({ prompt: userInput, response: aiResponse });
        setInput("");
      });
  };

  return (
    <Container width="80%" maxWidth="800px">
      <Heading mb="1rem" as="h1" size="2xl">
        Fun with AI
      </Heading>
      <Form handleSubmit={submitForm} />
      <ResponseList response={response} setResponse={setResponse} />
    </Container>
  );
}

export default App;
