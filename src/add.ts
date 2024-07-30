/**
 * 计算任意俩个正数的和。
 * @group 数学
 * @param {string} augend 第一个参数
 * @param {string} addend 第二个参数
 * @returns {string} 返回一个俩数相加后的和
 * @example
 * ```ts
 * add('1', '1')    //  2
 * ```
 * @remarks *当前方法不支持负数的相加
 */
export const add = (augend: string, addend: string): string => {
	if (typeof augend !== 'string' || typeof addend !== 'string') {
		throw new Error('请正确传入参数');
	}
	const a = augend.split('');
	const b = addend.split('');
	const sum: number[] = [];
	let gos: number = 0;
	while (a.length || b.length) {
		const num1 = a.pop() || 0;
		const num2 = b.pop() || 0;
		let tmp: number = Number(num1) + Number(num2) + gos;

		if (tmp > 9) {
			gos = 1;
			tmp %= 10;
		} else {
			gos = 0;
		}
		sum.unshift(tmp);
	}
	return sum.join('');
};
