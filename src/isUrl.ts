/**
 * 判断所输入的值是不是一个合法的网址
 * @group 工具函数
 * @param {string} str 检测字符串 
 * @returns 返回一个bool值
 * @example
 * ```ts
 * isUrl("https://www.ibadgers.cn/buzzs/")  //  true
 */
export const isUrl = (str: string): boolean => {
    return /^(https:\/\/|http:\/\/|ftp:\/\/|rtsp:\/\/|mms:\/\/)?[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+[/=?%\-&_~`@[\]':+!]*([^<>""])*$/.test(str);
}