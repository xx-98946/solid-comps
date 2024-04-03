import { Header } from "@/comps";
import { css } from "@emotion/css";
import style from "./index.css?raw";

export default function Demo() {
  const css_demo = css`
    ${style}
  `;

  return (
    <div class={css_demo}>
      Demo
      <button class="button">asdfasd</button>
      <span class="button">spanaspnas</span>
    </div>
  );
}
