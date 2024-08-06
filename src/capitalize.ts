/**
 * 将单词的首字母转为大写字母
 * @group 工具函数
 * @param {string} str 需要转化的英文字符串
 * @returns {string} 返回一个以大写字母为开头的原单词
 * @example
 * ```ts
 * console.log(capitalize(capitalize)) //   Capitalize
 * ```
 */
import { isEnglish } from './isEnglish';
export const capitalize = (str: string): string => {
	if (!isEnglish(str)) {
		throw new Error('参数错了！');
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
};
