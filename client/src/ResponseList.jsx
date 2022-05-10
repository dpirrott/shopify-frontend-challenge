import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Response } from "./Response";

export const ResponseList = ({ response, setResponse }) => {
  const [responses, setResponses] = useState([]);
  const [listItems, setListItems] = useState([]);
  const generateListItems = () => {
    return responses.map(({ prompt, response }, index) => (
      <ListItem
        key={index}
        mt="1rem"
        borderRadius="1em"
        bg="#43f10073"
        padding="1rem"
        boxShadow="lg"
      >
        <Response
          prompt={prompt}
          response={response}
          latest={index === 0}
          setResponse={setResponse}
        />
      </ListItem>
    ));
  };

  useEffect(() => {
    if (response) {
      setResponses((prev) => [response, ...prev]);
      setResponse(null);
    }
  }, [response]);

  useEffect(() => {
    if (responses) {
      setListItems(generateListItems());
    }
  }, [responses]);

  return (
    <Container maxWidth="100%" padding="0" boxShadow="lg" borderRadius="1em">
      <div className="responseSection">
        <Heading as="h3" size="lg">
          Responses
        </Heading>

        <UnorderedList ml="0" listStyleType="none">
          {listItems}
        </UnorderedList>
      </div>
    </Container>
  );
};
