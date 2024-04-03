import { For, Show, createEffect, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import { SvgDark, SvgLight } from "@/comps";
import { css, cx } from "@emotion/css";
import { useTheme } from "@/global/theme";

export default function Theme() {
  const { isDark, toggleTheme } = useTheme();
  const css_button = css({
    display: "flex",
    alignItems: "center",
  });

  return (
    <button onclick={toggleTheme} class={css_button}>
      <Show when={isDark()} fallback={<SvgDark />}>
        <SvgLight />
      </Show>
    </button>
  );
}
