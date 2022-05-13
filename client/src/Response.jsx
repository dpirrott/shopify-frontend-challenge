import { Flex, Text, Collapse } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Response = ({
  prompt,
  response,
  latest,
  slideClass,
  setSlideClass,
  responses,
}) => {
  const [typeWriter, setTypeWriter] = useState("");

  const printSlow = () => {
    const temp = response;

    for (let i = 1; i < response.length; i++) {
      setTimeout(() => {
        setTypeWriter(temp.slice(0, i));
      }, 50 * i);
    }
  };

  useEffect(() => {
    setTypeWriter("");
    if (latest) {
      setTimeout(() => {
        printSlow();
      }, 1200);
    } else {
      setSlideClass("");
    }
  }, [responses]);

  return (
    <div className={`${latest ? slideClass : ""}`}>
      <Flex
        direction="column"
        gap={3}
        className={`${latest ? slideClass : ""}`}
      >
        <Flex
          direction="row"
          overflow="hidden"
          justify="space-between"
          gap="2em"
        >
          <Text fontWeight="700" width="11%" minWidth="80px">
            Prompt:
          </Text>
          <Text width="88%" fontSize={20}>
            {prompt}
          </Text>
        </Flex>
        <Flex
          direction="row"
          overflow="hidden"
          justify="space-between"
          gap="2em"
        >
          <Text fontWeight="700" width="11%" minWidth="80px">
            Response:
          </Text>
          <Text
            width="88%"
            fontSize="1.25rem"
            minHeight="30px"
            height="fit-content"
            className="response"
          >
            {latest ? typeWriter : response}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};
