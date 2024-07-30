/**
 * 计算任意俩个正数数的差。
 * @group 数学
 * @param {string} num1 第一个参数
 * @param {string} num2 第二个参数
 * @returns {string} 返回一个俩数相减的差
 * @example
 * ```ts
 * subtraction('1', '1')    //  0
 * ```
 * @remarks *当前方法不支持负数的相加
 */
export const subtraction = (num1:string, num2:string): string => {
	if (typeof num1 !== 'string' || typeof num2 !== 'string') {
		throw new Error('请正确传入参数');
	}
	if (num1 === num2) return '0';
	function lt(num1, num2) {
		if (num1.length < num2.length) {
			return true;
		} else if (num1.length === num2.length) {
			return num1 < num2;
		} else {
			return false;
		}
	}
	let isMinus = false;
	if (lt(num1, num2)) {
		[num1, num2] = [num2, num1];
		isMinus = true;
	}

	const len = Math.max(num1.length, num2.length);
	num1 = num1.padStart(len, '0');
	num2 = num2.padStart(len, '0');

	let flag = 0,
		result = '',
		temp;
	for (let i = len - 1; i >= 0; i--) {
		temp = parseInt(num1[i]) - flag - parseInt(num2[i]);
		if (temp < 0) {
			result = 10 + temp + result;
			flag = 1;
		} else {
			result = temp + result;
			flag = 0;
		}
	}
	result = (isMinus ? '-' : '') + result.replace(/^0+/, '');
	return result;
};
