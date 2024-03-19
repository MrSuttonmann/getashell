"use client";

import { Flex, Button, Select, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { toast } from "react-toastify";
import { create } from "@/server/actions/create-form-action";

export const CreateForm = () => {
  const [distro, setDistro] = useState("select");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!(distro == "select") && !(name == "")) {
      toast.info(`Creating a shell with name ${name} and distro ${distro}.`);
      const data = {
        distro: distro,
        name: name,
      };
      const result = create(data);
      console.log(result);
    } else {
      toast.error("Please provide both a name and a distro.");
    }
  };

  return (
    <Flex className="flex-row">
      <Select.Root defaultValue="select" onValueChange={(e) => setDistro(e)}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item disabled={true} value={"select"}>
              Select
            </Select.Item>
            <Select.Item value="debian">Debian</Select.Item>
            <Select.Item value="ubuntu">Ubuntu</Select.Item>
            <Select.Item value="alpine">Alpine</Select.Item>
            <Select.Item value="rocky">Rocky Linux</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <TextField.Root className="ml-2 mr-5">
        <TextField.Input
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
      </TextField.Root>
      <Button onClick={() => handleSubmit()} color="indigo" variant="soft">
        Get me a shell
      </Button>
    </Flex>
  );
};
