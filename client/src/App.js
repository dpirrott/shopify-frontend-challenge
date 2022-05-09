import "./App.css";
import Form from "./Form";
import { ResponseList } from "./ResponseList";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Heading as="h1" size="2xl">
        Fun with AI
      </Heading>
      <Form />
      <ResponseList />
    </div>
  );
}

export default App;
