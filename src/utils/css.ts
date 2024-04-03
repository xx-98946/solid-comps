import { useTheme } from "@/global/theme";
import { css as _css, cx } from "@emotion/css";
const { isDark } = useTheme();
/**
 * 移除最外层的scope字段，以用于生成scope样式
 * @param styles 
 * @returns 
 */
function rm(styles: string) {
    const startReg = /^:scope(\s+){(\s*)/;
    const endReg = /\}(\s)$/;
    return styles.replace(startReg, "").replace(endReg, "");
}

/**
 * 返回函数是为了暗黑模式可以触发页面更新
 * @param light 
 * @param dark 
 * @param className 
 * @returns 
 */
export function css(light: string, dark = "", className = "") {
    return () => cx(_css(rm(light), isDark() && rm(dark)), className);
}

export { cx };