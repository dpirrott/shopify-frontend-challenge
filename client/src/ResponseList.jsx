import { Container, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Response } from "./Response";

export const ResponseList = ({ response, setResponse }) => {
  const [responses, setResponses] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [slideClass, setSlideClass] = useState("");
  // const [animation, setAnimation] = useState(0);
  // const { isOpen, onToggle } = useDisclosure();
  const generateListItems = () => {
    return responses.map(({ prompt, response }, index) => {
      return (
        <ListItem
          key={index === 0 ? response.length * 10 : index}
          mt="1rem"
          borderRadius="1em"
          bg="#43f100de"
          padding="1rem"
          boxShadow="lg"
          className={index === 0 ? slideClass + "outerLi" : ""}
          onAnimationEnd={setSlideClass("")}
        >
          <Response
            prompt={prompt}
            response={response}
            responses={responses}
            latest={index === 0}
            setResponse={setResponse}
            slideClass={slideClass}
            setSlideClass={setSlideClass}
          />
        </ListItem>
      );
    });
  };

  useEffect(() => {
    if (response) {
      setSlideClass("newestShow");
      setResponses((prev) => [response, ...prev]);
      setResponse(null);
    }
  }, [response]);

  useEffect(() => {
    if (responses) {
      setListItems(generateListItems());
      setSlideClass("");
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
