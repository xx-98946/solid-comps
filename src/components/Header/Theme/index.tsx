import { SvgDark, SvgLight, SvgSystem } from "@/components/Svg";
import { For, Show, createEffect, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";

export default function Theme() {
    const defaultTheme = localStorage.getItem("theme") || "system";
    const [theme, setTheme] = createSignal(defaultTheme);
    const [visible, setVisible] = createSignal(false);

    function changeTheme(value: string) {
        setVisible(false);
        setTheme(value);
        localStorage.setItem("theme", value);
    }

    createEffect(() => {
        // console.log("??", theme());
        if (theme() == "light") {
            document.documentElement.classList.remove("dark");
        }
        if (theme() == "dark") {
            document.documentElement.classList.add("dark");
        }
        if (theme() == "system") {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        }
    });

    const list = [
        {
            value: "light",
            icon: SvgLight,
            label: "明亮",
        },
        {
            value: "dark",
            icon: SvgDark,
            label: "暗夜",
        },
        {
            value: "system",
            icon: SvgSystem,
            label: "系统",
        },
    ];

    return (
        <div class="inline-block relative">
            <button onclick={[setVisible, true]} class="flex items-center">
                <Dynamic
                    component={
                        list.find((item) => item.value === theme())?.icon
                    }
                    class="h-6"
                />
            </button>

            <Show when={visible()}>
                <div class="absolute border w-28 top-full bg-white mt-4 -right-1/2 flex flex-col items-stretch dark:bg-slate-800 dark:text-white dark:border-slate-900">
                    <For each={list}>
                        {(theme) => {
                            return (
                                <button
                                    class="hover:bg-slate-100 p-2 dark:hover:bg-slate-700 flex items-center"
                                    onclick={[changeTheme, theme.value]}
                                >
                                    <Dynamic
                                        component={theme.icon}
                                        class="h-6 mx-2"
                                    ></Dynamic>
                                    {theme.label}
                                </button>
                            );
                        }}
                    </For>
                </div>
            </Show>
        </div>
    );
}
