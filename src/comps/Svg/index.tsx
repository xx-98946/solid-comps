import { BaseProps } from "@/types";
import { css, cx } from "@emotion/css";

interface Props extends BaseProps {}

const css_icon = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export function SvgSearch(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class={cx(css_icon, props.class)}
    >
      <path
        fill-rule="evenodd"
        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function SvgEllipsisVertical(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={cx(css_icon, props.class)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
}

export function SvgCommand(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      class={cx(css_icon, props.class)}
    >
      <path
        fill="currentColor"
        d="M180 144h-20v-32h20a36 36 0 1 0-36-36v20h-32V76a36 36 0 1 0-36 36h20v32H76a36 36 0 1 0 36 36v-20h32v20a36 36 0 1 0 36-36m-20-68a20 20 0 1 1 20 20h-20ZM56 76a20 20 0 0 1 40 0v20H76a20 20 0 0 1-20-20m40 104a20 20 0 1 1-20-20h20Zm16-68h32v32h-32Zm68 88a20 20 0 0 1-20-20v-20h20a20 20 0 0 1 0 40"
      />
    </svg>
  );
}

export function SvgLight(props: Props) {
  return (
    <svg
      class={cx(css_icon, props.class)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
}

export function SvgDark(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={cx(css_icon, props.class)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
}

export function SvgSystem(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class={cx(css_icon, props.class)}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
      />
    </svg>
  );
}

export function SvgSolid(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 166 155.3"
      class={cx(css_icon, props.class)}
    >
      <path
        d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
        fill="#76b3e1"
      />
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="27.5"
        y1="3"
        x2="152"
        y2="63.5"
      >
        <stop offset=".1" stop-color="#76b3e1" />
        <stop offset=".3" stop-color="#dcf2fd" />
        <stop offset="1" stop-color="#76b3e1" />
      </linearGradient>
      <path
        d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z"
        opacity=".3"
        fill="url(#a)"
      />
      <path
        d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
        fill="#518ac8"
      />
      <linearGradient
        id="b"
        gradientUnits="userSpaceOnUse"
        x1="95.8"
        y1="32.6"
        x2="74"
        y2="105.2"
      >
        <stop offset="0" stop-color="#76b3e1" />
        <stop offset=".5" stop-color="#4377bb" />
        <stop offset="1" stop-color="#1f3b77" />
      </linearGradient>
      <path
        d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z"
        opacity=".3"
        fill="url(#b)"
      />
      <linearGradient
        id="c"
        gradientUnits="userSpaceOnUse"
        x1="18.4"
        y1="64.2"
        x2="144.3"
        y2="149.8"
      >
        <stop offset="0" stop-color="#315aa9" />
        <stop offset=".5" stop-color="#518ac8" />
        <stop offset="1" stop-color="#315aa9" />
      </linearGradient>
      <path
        d="M134 80a45 45 0 00-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z"
        fill="url(#c)"
      />
      <linearGradient
        id="d"
        gradientUnits="userSpaceOnUse"
        x1="75.2"
        y1="74.5"
        x2="24.4"
        y2="260.8"
      >
        <stop offset="0" stop-color="#4377bb" />
        <stop offset=".5" stop-color="#1a336b" />
        <stop offset="1" stop-color="#1a336b" />
      </linearGradient>
      <path
        d="M114 115a45 45 0 00-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z"
        fill="url(#d)"
      />
    </svg>
  );
}
