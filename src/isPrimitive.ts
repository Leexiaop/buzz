import { isStatic } from "./isStatic"

/**
 * 检查数据是不是原始数据类型包含symbol
 * @group 工具函数
 * @param {string} value 要检测的数据 
 * @returns {boolean} 返回一个布尔值
 * @example
 * ```ts
 * isPrimitive(124) //  true
 * ```
 */
export const isPrimitive = (value):boolean => {
    return isStatic(value) || typeof value === 'symbol'
}
