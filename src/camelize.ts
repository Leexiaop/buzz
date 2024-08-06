/**
 * 将横线(-)或者下划线(_)转为驼峰
 * @group 工具函数
 * @param {string} str 要转化的字符串
 * @param {boolean} is 布尔值，默认false,表示是否要留下_或者-
 * @returns {string} 返回驼峰字符串
 * @example
 * ```ts
 * console.log(camelize(is-json)) //    jsJson
 * ```
 */
export const camelize = (str: string, is: boolean = false): string => {
	const reg = /([-_]+(\w))/g;
	return str.replace(reg, (_, c) => {
		if (!is) c = c.replace(/[-_]+/g, '');
		return c ? c.toUpperCase() : '';
	});
};
