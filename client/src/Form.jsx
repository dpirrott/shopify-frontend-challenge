import React, { useState } from "react";
import { FormLabel, Textarea, Button, FormControl } from "@chakra-ui/react";

export default function CustomForm({ handleSubmit }) {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(value, setValue);
        }}
      >
        <FormControl>
          <FormLabel htmlFor="prompt">Enter prompt:</FormLabel>
          <Textarea
            id="prompt"
            value={value}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
          <Button type="submit" colorScheme="telegram" variant="outline">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
}
