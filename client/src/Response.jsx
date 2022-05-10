import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Response = ({ prompt, response, setResponse, latest }) => {
  const [typeWriter, setTypeWriter] = useState("");

  const printSlow = () => {
    const temp = response;
    setResponse(null);
    for (let i = 1; i < response.length; i++) {
      setTimeout(() => {
        setTypeWriter(temp.slice(0, i));
      }, 50 * i);
    }
  };

  useEffect(() => {
    if (latest) {
      printSlow();
    }
  }, [response]);

  return (
    <div>
      <Flex direction="column" gap={3}>
        <Flex direction="row" justify="space-between" gap="2em">
          <Text fontWeight="700" width="11%" minWidth="80px">
            Prompt:
          </Text>
          <Text
            width="88%"
            fontStyle="italic"
            fontSize={20}
            fontFamily="roboto"
          >
            {prompt}
          </Text>
        </Flex>
        <Flex direction="row" justify="space-between" gap="2em">
          <Text fontWeight="700" width="11%" minWidth="80px">
            Response:
          </Text>
          <Text className="response" width="88%" fontSize="1.25rem">
            {latest ? typeWriter : response}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};
