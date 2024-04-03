import { createSignal } from "solid-js";


const initTheme = localStorage.getItem("theme") || "light";
const [theme, _setTheme] = createSignal(initTheme);

export function useTheme() {
  function setTheme(newTheme: string) {
    _setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function isDark() {
    return theme() == "dark";
  }

  function dark(darkClass: string) {
    return isDark() ? darkClass : "";
  }

  function toggleTheme() {
    if (isDark()) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return {
    theme,
    setTheme,
    dark,
    isDark,
    toggleTheme,
  };

}

