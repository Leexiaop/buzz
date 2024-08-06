/**
 * 计算任意俩个正整数的和。
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
    const reg = /^[0-9]+$/;
    if (!reg.test(augend) || !reg.test(augend)) {
        throw new Error("参数错啦！")
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
