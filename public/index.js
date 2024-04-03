const theme = localStorage.getItem("theme");
if (theme == "dark") {
  document.documentElement.classList.add("dark");
}
// /**
//  * 自动检测夜间模式
//  */
// if (theme == "dark") {
//   document.documentElement.classList.add("dark");
// }
// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (event) => {
//     if (event.matches && theme == "system") {
//       document.documentElement.classList.add("dark");
//     }
//     if (!event.matches && theme == "system") {
//       document.documentElement.classList.remove("dark");
//     }
//   });
