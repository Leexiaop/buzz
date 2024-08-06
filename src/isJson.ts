/**
 * 判断数据结构是不是json
 * @group 工具函数
 * @param {string} str string类型的参数
 * @returns {boolean} 返回一个布尔值
 * @example
 * ```ts
 * console.log(isJson({})) // false
 * ```
 */
export const isJson = (str: string): boolean => {
	if (typeof str == 'string') {
		try {
			const obj = JSON.parse(str);
			// 等于这个条件说明就是JSON字符串 会返回true
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				//不是就返回false
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
};
