/**
 * 将阿拉伯数字转为汉字的金额，支持负数
 * @group 工具函数
 * @param {string} dValue 
 * @returns {string} 返回一个中文金额
 * @example
 * ```ts
 * cashNumberToChinese('211234.89')    //  贰拾壹万壹仟贰佰叁拾肆捌角玖分
 * ```
 * @remark 支持负数，并且会保留俩位小数
 */
export const cashNumberToChinese = (dValue: string): string => {
	let maxDec = 2;
	dValue = dValue.toString().replace(/,/g, '');
	dValue = dValue.replace(/^0+/, '');
	if (dValue == '') {
		return '零';
	}
	else if (isNaN(parseInt(dValue))) {
		return '错误：金额不是合法的数值！';
	}
	let minus = '';
	const CN_SYMBOL = '';
	if (dValue.length > 1) {
		if (dValue.indexOf('-') == 0) {
			dValue = dValue.replace('-', '');
			minus = '负';
		}
		if (dValue.indexOf('+') == 0) {
			dValue = dValue.replace('+', '');
		}
	}
	let vInt = '';
	let vDec = '';
	let resAIW;
	let zeroCount;
	let i, p, d;
	let quotient, modulus; 
	const NoneDecLen = typeof maxDec == 'undefined' || maxDec == null || Number(maxDec) < 0 || Number(maxDec) > 5;
	const parts = dValue.split('.');
	if (parts.length > 1) {
		vInt = parts[0];
		vDec = parts[1];
		if (NoneDecLen) {
			maxDec = vDec.length > 5 ? 5 : vDec.length;
		}
		let rDec = Number('0.' + vDec);
		rDec *= Math.pow(10, maxDec);
		rDec = Math.round(Math.abs(rDec));
		rDec /= Math.pow(10, maxDec);
		const aIntDec = rDec.toString().split('.');
		if (Number(aIntDec[0]) == 1) {
			vInt = (Number(vInt) + 1).toString();
		}
		if (aIntDec.length > 1) {
			vDec = aIntDec[1];
		} else {
			vDec = '';
		}
	} else {
		vInt = dValue;
		vDec = '';
		if (NoneDecLen) {
			maxDec = 0;
		}
	}
	if (vInt.length > 44) {
		return '错误：数值过大！整数位长【' + vInt.length.toString() + '】超过了上限！';
	}
	const digits = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']; // 零~玖
	const radices = ['', '拾', '佰', '仟']; // 拾,佰,仟
	const bigRadices = ['', '万', '亿', '兆', '京', '垓', '杼', '穰', '沟', '涧', '正']; // 万,亿,兆,京,垓,杼,穰,沟,涧,正
	const decimals = ['角', '分', '厘', '毫', '丝']; // 角/分/厘/毫/丝
	resAIW = '';
	if (Number(vInt) > 0) {
		zeroCount = 0;
		for (i = 0; i < vInt.length; i++) {
			p = vInt.length - i - 1;
			d = vInt.substr(i, 1);
			quotient = p / 4;
			modulus = p % 4;
			if (d == '0') {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					resAIW += digits[0];
				}
				zeroCount = 0;
				resAIW += digits[Number(d)] + radices[modulus];
			}
			if (modulus == 0 && zeroCount < 4) {
				resAIW += bigRadices[quotient];
			}
		}
		resAIW;
	}
	for (i = 0; i < vDec.length; i++) {
		d = vDec.substr(i, 1);
		if (d != '0') {
			resAIW += digits[Number(d)] + decimals[i];
		}
	}
	if (resAIW == '') {
		resAIW = '零';
	}
	if (vDec == '') {
		resAIW;
	}
	resAIW = CN_SYMBOL + minus + resAIW; // 人民币/负......元角分/整
	return resAIW;
};
