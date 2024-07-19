/**
 * 验证座机和手机号是否合格，支持自定义验证规则。
 * @group 工具函数
 * @param value 号码
 * @param reg 自定义规则，可选参数
 * @returns 返回一个布尔值，通过返回true
 * @example
 * ```ts
 * validatePhoneNumber('13691388209')    //  true
 * validatePhoneNumber('01022458779')    //  true
 * validatePhoneNumber('010-22458779')    //  true
 * ```
 * @remarks *注意不支持国外号码，不支持地区码校验，不支持分机号
 */
export const validatePhoneNumber = (value: string, reg?: RegExp): boolean => {
	if (!value || (value && typeof value !== 'string')) {
		throw new Error('请正确传入号码!');
	}
	const pattern: RegExp =
		reg || /^((0\d{2,3}(-)?\d{7,8})|(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8})$/;
	return pattern.test(value);
};
