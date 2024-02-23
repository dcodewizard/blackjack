import { toast } from "react-toastify";

import { withTryCatchType } from "@/types";

export const withTryCatch = async ({
  tryFunction,
  catchFunction,
  finallyFunction,
}: withTryCatchType) => {
  try {
    await tryFunction();
  } catch (e) {
    toast.error(e.message);
    catchFunction?.(e);
  } finally {
    finallyFunction?.();
  }
};
