import { Signal, createSignal } from "solid-js";

export function useSignal<T>(initValue: T): Signal<T> {
    const [getValue, _setValue] = createSignal(initValue);

    // 用于触发更新
    function setValue(originValue: T) {
        const copyValue = structuredClone(originValue);
        _setValue(copyValue as any);
    }

    return [getValue, setValue] as any;
}
