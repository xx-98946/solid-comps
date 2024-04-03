import { SvgCommand, SvgSearch, SvgSolid } from "@/comps";
import { createEffect } from "solid-js";
import { BaseProps } from "@/types";
import Theme from "./Theme";
import light from "./index.css?raw";
import dark from "./index.dark.css?raw";
import { css } from "@/utils/css";

interface Props extends BaseProps {}

export function Header(props: Props) {
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
    <header class={css(light, dark, props.class)()}>
      <a class="first" href="/">
        <SvgSolid />
        <span class="text">七色琉璃花</span>
      </a>

      <div class="second">
        <div class="input-container ">
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

      <div class="third flex items-center">
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
