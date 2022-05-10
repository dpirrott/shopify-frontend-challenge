import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Response = ({ prompt, response }) => {
  return (
    <div>
      <Flex direction="column" gap={3}>
        <Flex direction="row" justify="space-between" gap="2em">
          <Text fontWeight="700" width="11%">
            Prompt:
          </Text>
          <Text width="88%" fontStyle="italic" fontSize={20}>
            {prompt}
          </Text>
        </Flex>
        <Flex direction="row" justify="space-between" gap="2em">
          <Text fontWeight="700" width="11%">
            Response:
          </Text>
          <Text className="response" width="88%">
            {response}
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};
