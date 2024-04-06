"use client";

import { ContainerData } from "@/types/types";
import { Flex, Separator } from "@radix-ui/themes";
import { CreateShellForm } from "../create-shell-form";
import { renderShell } from "../render-shell";

interface shellDataType {
  shellData: ContainerData[];
}

export const ShellActions = (shellData: shellDataType) => {
  const shells = shellData.shellData;
  return (
    <Flex className="flex-col border-sky-500 border-2 border-dashed rounded-md p-5 justify-stretch items-stretch">
      <CreateShellForm />
      <Separator my="3" size="4" />
      <Flex className="flex-col gap-2">
        {shells.map((shell: ContainerData) => renderShell(shell))}
      </Flex>
    </Flex>
  );
};
