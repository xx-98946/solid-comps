import { createEffect, createSignal } from "solid-js";
import { clone } from "lodash";
import Header from "@/components/Header";

export default function Demo() {
    const [data, setData] = createSignal({
        a: {
            b: {
                c: {
                    d: "123",
                },
            },
        },
        b: { r: "xxxx" },
    });

    /**
     * 1. 拷贝
     * 2. 修改
     * 3. 触发更新
     */
    function handleChange() {
        const copy = clone(data());
        copy.a.b.c.d = Math.random().toString();
        setData(copy);
    }

    createEffect(() => {
        console.log("init", data().b);
    });

    return (
        <>
            <Header />
            <section class="px-16 py-5">
                <h1 class="font-800 text-8">测试页</h1>
                <section>
                    <button
                        onclick={handleChange}
                        class="p-2 my-2 border-1 border-solid border-black select-none cursor-pointer"
                    >
                        修改为随机字符串
                    </button>
                    <p>类字符串：{data().a.b.c.d}</p>
                </section>
            </section>
        </>
    );
}
