/**
 * 检查是否为合法的国内邮政编码
 * @group 工具函数
 * @param {string} value 检查的字符
 * @returns {boolean} 返回bool值
 * @example
 * ```ts
 * isPostCode("123")    //  false
 * isPostCode("100000")     //  true
 * ```
 */
export const isPostCode = (value: string): boolean => {
    return /^[1-9][0-9]{5}$/.test(value.toString());
}