import MyLib from "../js/index";

window.MyLib = MyLib;

queueMicrotask(() => {
  MyLib.start();
});
