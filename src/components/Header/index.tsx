import { SvgCommand, SvgSearch } from "@/components/Svg";
import Theme from "./Theme";

import SolidIcon from "@/assets/solid.svg";
import { createEffect } from "solid-js";

export default function Header() {
  createEffect(() => {
    const focusFunc = (e: KeyboardEvent) => {
      if (e.key == "k" && (e.ctrlKey || e.metaKey)) {
        refInput?.focus();
      }
    };
    window.addEventListener("keydown", focusFunc);
    return () => {
      console.log("unmount");
      window.removeEventListener("keydown", focusFunc);
    };
  });
  
  const links = [
    {
      path: "/demo",
      name: "测试",
    },
    {
      path: "/more",
      name: "更多",
    },
  ];

  let refInput: HTMLInputElement | undefined;
  return (
    <header class="border-b border-slate-300 sticky top-0 flex space-x-2 px-16 py-3 dark:border-slate-800">
      <a class="flex items-center" href="/">
        <img src={SolidIcon} alt="" class="w-6 h-6" />
        <span class="font-bold mx-2 text-xl">七色琉璃花</span>
      </a>
      <div class="pl-4 flex-1">
        <div class="border flex items-center  w-1/2 p-2 rounded-lg dark:bg-slate-800 dark:border-none">
          <SvgSearch class="w-5 mr-2 text-slate-500" />
          <input
            placeholder=" 输入关键字搜索…"
            class="outline-none w-full bg-transparent"
            autofocus
            ref={refInput}
          />

          <div class=" inline-flex items-center px-2 space-x-2 rounded-md bg-slate-100 dark:bg-slate-800">
            <SvgCommand />
            <span>K</span>
          </div>
        </div>
      </div>

      <div class="flex items-center">
        <nav class="flex items-center mr-20 space-x-8">
          {links.map(({ path, name }) => (
            <a href={path}>{name}</a>
          ))}
        </nav>
        <Theme />
      </div>
    </header>
  );
}
