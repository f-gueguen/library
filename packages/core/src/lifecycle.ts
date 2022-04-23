import { dispatch } from "./utils/dispatch";

export const start = () => {
  console.log("mylib: before init");
  dispatch(document, "mylib:init");
  console.log("mylib: after init");

  // do stuff

  dispatch(document, "mylib:started");
  console.log("mylib: started");
};
