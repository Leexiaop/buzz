/**
 * 判断一个字符串是不是英文
 * @group 工具函数
 * @param {string} str 
 * @returns 返回一个布尔值
 * @example
 * ```ts
 * console.log(isEnglish('我就是我')) // false
 * ```
 */
export const isEnglish = (str: string): boolean => {
	const unicode = str.charCodeAt(0);
	return (unicode >= 65 && unicode <= 90) || (unicode >= 97 && unicode <= 122);
};
