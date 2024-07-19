/**
 * 验证统一征信码是否合格，支持自定义验证规则。
 * @group 工具函数
 * @param {string} value 统一征信码 
 * @param {RegExp} reg 自定义规则，可选参数
 * @returns {boolean} 返回一个布尔值，通过返回true
 * @example
 * ```ts
 * validateIdentifyNumber('IOZSVa9892844782992')    //  fasle
 * ```
 */
export const validateIdentifyNumber = (value: string, reg?: RegExp): boolean => {
	if (!value || (value && typeof value !== 'string')) {
		throw new Error('请正确传入统一征信码!');
	}
	const pattern: RegExp = reg || /^[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}$/g;
	return pattern.test(value);
};
