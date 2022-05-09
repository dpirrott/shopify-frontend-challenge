import "./App.css";
import Form from "./Form";
import { ResponseList } from "./ResponseList";
import { Heading } from "@chakra-ui/react";
import axios from "axios";

function App() {
  const submitForm = (userInput, setInput) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
    const data = {
      prompt: userInput,
      temperature: 0.7,
      max_tokens: 50,
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
        console.log(response);
        setInput("");
      });
  };

  return (
    <div className="App">
      <Heading as="h1" size="2xl">
        Fun with AI
      </Heading>
      <Form handleSubmit={submitForm} />
      <ResponseList />
    </div>
  );
}

export default App;
