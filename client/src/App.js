import "./App.css";
import Form from "./Form";
import { ResponseList } from "./ResponseList";
import { Container, Flex, Heading, Link } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import vector from "./images/6106991.jpg";

function App() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = (userInput, setInput) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
    const data = {
      prompt: userInput,
      temperature: 0.7,
      max_tokens: 100,
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
        setIsLoading(false);
        setResponse({ prompt: userInput, response: aiResponse });
        setInput("");
      });
  };

  return (
    <Container maxWidth="100%" backgroundImage={vector} backgroundSize="cover">
      <Container
        width="100%"
        maxWidth="800px"
        // backgroundColor="green.400"
        minHeight="100vh"
      >
        <Flex
          direction="column"
          justify="space-between"
          minHeight="100vh"
          gap="30px"
        >
          <div>
            <Heading mb="1rem" as="h1" size="2xl" color="#d7d7d7">
              Fun with AI
            </Heading>
            <Form
              handleSubmit={submitForm}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
            <ResponseList response={response} setResponse={setResponse} />
          </div>
          <Link
            textAlign="center"
            backgroundColor="rgb(255 255 255 / 36%)"
            borderRadius="10px 10px 0 0"
            href="https://www.freepik.com/vectors/future-background"
          >
            Future background vector created by freepik - www.freepik.com
          </Link>
        </Flex>
      </Container>
    </Container>
  );
}

export default App;
