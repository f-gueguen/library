import Core from "./core";

export const plugin = (callback: CallableFunction) => {
  callback(Core);
};
