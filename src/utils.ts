import { OperatorName } from "@/types";
import { pathsMap } from "@/routes";

export const getPathByOperatorName = (name: OperatorName) => {
  return pathsMap[name];
};
