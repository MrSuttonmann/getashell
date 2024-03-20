import { containerSchema } from "../schemas/container-schmea";
import * as util from "util";
import { containerData } from "../types/types";

const exec = util.promisify(require("child_process").exec);

export const spawnContainer = async (data: containerData) => {
  if (containerSchema.safeParse(data).success) {
    const command = `docker run -td --hostname ${data.name} -p ${data.port}:22 --name ${data.distro}-${data.id} getashell:${data.distro} && docker exec ${data.distro}-${data.id} sh -c "echo ${data.distro}:${data.password} | chpasswd"`;
    const { stdout, stderr } = await exec(command);
    if (stderr && stderr.search("chpasswd") != -1) {
      console.warn(`Possible chpasswd error: Stderr: ${stderr}`);
      return { success: true, error: "" };
    } else if (stderr && !(stderr.search("chpasswd") != -1)) {
      return { success: false, error: stderr };
    } else {
      return { success: true, error: "" };
    }
  } else {
    console.error("Invalid data!");
  }
};

export const killContainer = async (name: string, id: number) => {
  const { stdout, stderr } = await exec(`docker rm -f ${name}-${id}`);
  if (stderr) {
    return { success: false, error: stderr };
  } else {
    return { success: true, error: "" };
  }
};
