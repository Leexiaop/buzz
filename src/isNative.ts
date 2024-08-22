
/**
 * 判断某个方法是不是浏览器内置方法
 * @group 工具函数
 * @param {string} value 要检查的方法 
 * @returns {boolean} 返回一个布尔值
 * @example
 * ```ts
 * isNative('onload')   //  true
 * ```
 */
export const isNative = (value: string): boolean => {
    return typeof value === 'function' && /native code/.test(value)
}