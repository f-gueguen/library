import plugin from "../js/index.js";

document.addEventListener("mylib:init", () => {
  window.MyLib.plugin(plugin);
});
