/**
 * 检查是不是非symbol类型的原始数据
 * @group 工具函数
 * @param {string} value 要检测的数据
 * @returns {boolean} 返回一个布尔值
 * @example
 * ```ts
 * isStatic(123)    //  true
 * ```
 */
export const isStatic = (value):boolean => {
    return(
        typeof value === 'string' ||
        typeof value === 'number' ||
        typeof value === 'boolean' ||
        typeof value === 'undefined' ||
        value === null
    )
}
