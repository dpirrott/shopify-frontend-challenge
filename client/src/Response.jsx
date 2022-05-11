import { Flex, Text, Collapse } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Response = ({
  prompt,
  response,
  setResponse,
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
      // setSlideClass("newestShow");
      // setTimeout(() => {
      //   setSlideClass("");
      // }, 1050);
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
          // className={`${latest ? slideClass : ""}`}
          direction="row"
          overflow="hidden"
          justify="space-between"
          gap="2em"
        >
          <Text
            fontWeight="700"
            width="11%"
            // className={`${latest ? slideClass : ""}`}
            minWidth="80px"
          >
            Prompt:
          </Text>
          <Text
            width="88%"
            fontSize={20}
            // className={`${latest ? slideClass : ""}`}
          >
            {prompt}
          </Text>
        </Flex>
        <Flex
          // className={`${latest ? slideClass : ""}`}
          direction="row"
          overflow="hidden"
          justify="space-between"
          gap="2em"
        >
          <Text
            fontWeight="700"
            width="11%"
            minWidth="80px"
            // className={`${latest ? slideClass : ""}`}
          >
            Response:
          </Text>
          <Text
            width="88%"
            fontSize="1.25rem"
            minHeight="30px"
            height="fit-content"
            className="response"
            // className={`${latest ? slideClass : ""}`}
          >
            {latest ? typeWriter : response}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};
