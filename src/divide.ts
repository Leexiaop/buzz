/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
export const divide = (dividend, divisor) => {
	let result = 0,
		sign = 1,
		mul = 1;
	if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
		sign = -1;
	}
	dividend = Math.abs(dividend);
	divisor = Math.abs(divisor);

	let divisor2 = divisor;

	while (dividend >= divisor2) {
		if (dividend > divisor2 + divisor2) {
			divisor2 += divisor2;
			mul += mul;
		}
		dividend -= divisor2;
		result += mul;
	}
	while (dividend >= divisor) {
		dividend -= divisor;
		result += 1;
	}

	if (sign == 1 && result > Math.pow(2, 31) - 1) {
		return Math.pow(2, 31) - 1;
	} else if (sign == -1 && result < -Math.pow(2, 31)) {
		return -Math.pow(2, 31);
	}
	if (sign == 1) {
		return result;
	} else {
		return -result;
	}
};
