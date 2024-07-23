/**
 * 验证邮箱地址是否合格，支持自定义验证规则。
 * @group 工具函数
 * @param {string} value 邮箱地址
 * @param {RegExp} reg 自定义规则，可选参数
 * @returns {boolean} 返回一个布尔值，通过返回true
 * @example
 * ```ts
 * validateEmail('buzzs1369872@yeah.net')    //  true
 * ```
 */
export const validateEmail = (value: string, reg?: RegExp): boolean => {
	if (!value || (value && typeof value !== 'string')) {
		throw new Error('请正确传入邮箱地址!');
	}
    const pattern =
        reg || /^([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	return pattern.test(value);
};
