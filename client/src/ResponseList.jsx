import { Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { Response } from "./Response";

export const ResponseList = () => {
  const generateListItems = () => {};

  return (
    <div>
      <Heading as="h3" size="lg">
        Responses
      </Heading>

      <UnorderedList>
        <ListItem>
          <Response />
        </ListItem>
      </UnorderedList>
    </div>
  );
};
