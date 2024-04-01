// import { Accessor, Signal, createSignal } from "solid-js";

// /**
//  * 浅拷贝
//  */
// export function clone<T extends Object>(origin: T): T {
//     if (Array.isArray(origin)) {
//         return [...origin] as any;
//     }
//     return { ...origin }
// }

// /**
//  * 只支持objet和array
//  */
// export function useSignal<T>(initValue: T): [get:Accessor<T>,set: ] {
//     const [getValue, setValue] = createSignal(initValue);
//     if (typeof initValue !== "object") {
//         return [getValue, setValue];
//     }
//     const setObjectValue = function (objOrFunc: T & ((o: T) => void)) {
//         if (typeof objOrFunc == "function") {
//             setValue(pre => {
//                 const copy = clone(pre);
//                 const cb = objOrFunc;
//                 cb(copy);
//                 return copy;
//             })
//         } else {
//             setValue(objOrFunc as any);
//         }
//     }
//     return [getValue, setObjectValue] as any;
// }
