/**
 * 将一个数字转为中文
 * @group 工具函数
 * @param num 需要转中文的数字
 * @returns 转化后的中文字符串
 * @example
 * ```ts
 * numberToChinese(234) //  贰佰叁拾肆
 * ```
 */
export const numberToChinese = (num: number): string => {
	const digit = typeof num === 'number' ? String(num) : num;
	const zh = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
	const unit = ['仟', '佰', '拾', ''];
	const quot = [
		'万',
		'亿',
		'兆',
		'京',
		'垓',
		'秭',
		'穰',
		'沟',
		'涧',
		'正',
		'载',
		'极',
		'恒河沙',
		'阿僧祗',
		'那由他',
		'不可思议',
		'无量',
		'大数'
	];

	let breakLen = Math.ceil(digit.length / 4);
	let notBreakSegment = digit.length % 4 || 4;
	let segment;
	const zeroFlag = [],
		allZeroFlag = [];
	let result = '';

	while (breakLen > 0) {
		if (!result) {
			// 第一次执行
			segment = digit.slice(0, notBreakSegment);
			const segmentLen = segment.length;
			for (let i = 0; i < segmentLen; i++) {
				if (segment[i] != 0) {
					if (zeroFlag.length > 0) {
						result += '零' + zh[segment[i]] + unit[4 - segmentLen + i];
						// 判断是否需要加上 quot 单位
						if (i === segmentLen - 1 && breakLen > 1) {
							result += quot[breakLen - 2];
						}
						zeroFlag.length = 0;
					} else {
						result += zh[segment[i]] + unit[4 - segmentLen + i];
						if (i === segmentLen - 1 && breakLen > 1) {
							result += quot[breakLen - 2];
						}
					}
				} else {
					// 处理为 0 的情形
					if (segmentLen == 1) {
						result += zh[segment[i]];
						break;
					}
					zeroFlag.push(segment[i]);
					continue;
				}
			}
		} else {
			segment = digit.slice(notBreakSegment, notBreakSegment + 4);
			notBreakSegment += 4;

			for (let j = 0; j < segment.length; j++) {
				if (segment[j] != 0) {
					if (zeroFlag.length > 0) {
						// 第一次执行zeroFlag长度不为0，说明上一个分区最后有0待处理
						if (j === 0) {
							result += quot[breakLen - 1] + zh[segment[j]] + unit[j];
						} else {
							result += '零' + zh[segment[j]] + unit[j];
						}
						zeroFlag.length = 0;
					} else {
						result += zh[segment[j]] + unit[j];
					}
					// 判断是否需要加上 quot 单位
					if (j === segment.length - 1 && breakLen > 1) {
						result += quot[breakLen - 2];
					}
				} else {
					// 第一次执行如果zeroFlag长度不为0, 且上一划分不全为0
					if (j === 0 && zeroFlag.length > 0 && allZeroFlag.length === 0) {
						result += quot[breakLen - 1];
						zeroFlag.length = 0;
						zeroFlag.push(segment[j]);
					} else if (allZeroFlag.length > 0) {
						// 执行到最后
						if (breakLen == 1) {
							result += '';
						} else {
							zeroFlag.length = 0;
						}
					} else {
						zeroFlag.push(segment[j]);
					}

					if (j === segment.length - 1 && zeroFlag.length === 4 && breakLen !== 1) {
						// 如果执行到末尾
						if (breakLen === 1) {
							allZeroFlag.length = 0;
							zeroFlag.length = 0;
							result += quot[breakLen - 1];
						} else {
							allZeroFlag.push(segment[j]);
						}
					}
					continue;
				}
			}

			--breakLen;
		}

		return result;
	}
};
