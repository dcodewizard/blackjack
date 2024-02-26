import { withTryCatch } from "@/utils/withTryCatch";
import { APIFunctionType, APICallArgsType } from "@/types";

export const apiCall = async (
  dispatcher: APIFunctionType,
  { onSetup, onSuccess, onFailure, onCompletion }: APICallArgsType
) => {
  withTryCatch({
    tryFunction: async () => {
      onSetup();
      const { data } = await dispatcher();
      onSuccess(data);
    },
    catchFunction: onFailure,
    finallyFunction: onCompletion,
  });
};
