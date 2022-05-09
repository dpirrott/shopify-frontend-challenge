import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Response = () => {
  return (
    <div>
      <Flex direction="column" gap={3}>
        <Flex direction="row" justify="space-between">
          <Text width="11%">Prompt:</Text>
          <Text width="89%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            expedita, at ut ipsa
          </Text>
        </Flex>
        <Flex direction="row" justify="space-between">
          <Text width="11%">Response:</Text>
          <Text width="89%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            expedita, at ut ipsa porro mollitia sequi vel incidunt illum
            similique ab quae adipisci nesciunt sed, iure aut hic magni libero!
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};
