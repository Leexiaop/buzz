/**
 * 将一个数字按照指定的格式转化为千分符数字并返回转化后的数字
 * @group 工具函数
 * @param {number} num 需要转换的数字
 * @param {string} decimals 需要保留的小数位数默认2位
 * @param {string} point 小数点符号默认为英文句号(.)
 * @param {string} thousandsPoint 千分位符号默认为英文逗号(,)
 * @returns 返回一个字符串
 * @example
 * ```ts
 * onThousandsSeprate(222)	//	222.00
 * onThousandsSeprate(2113322)	//	2,113,322.00
 * ```
 */

export const onThousandsSeprate = (num: number, decimals?: number, point?: string, thousandsPoint?: string): string => {
	const number = (num + '').replace(/[^0-9+-Ee.]/g, '');
	const n = !isFinite(+number) ? 0 : +number;
	const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals);
	const sep = typeof thousandsPoint === 'undefined' ? ',' : thousandsPoint;
	const dec = typeof point === 'undefined' ? '.' : point;
	let s = undefined;
	const toFixedFix = (n, prec) => {
		const k = Math.pow(10, prec);
		return '' + Math.ceil(n * k) / k;
	};
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	const re = /(-?\d+)(\d{3})/;
	while (re.test(s[0])) {
		s[0] = s[0].replace(re, '$1' + sep + '$2');
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
};
