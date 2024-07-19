const aIdentityCode_City: object = {
	11: '北京',
	12: '天津',
	13: '河北',
	14: '山西',
	15: '内蒙古',
	21: '辽宁',
	22: '吉林',
	23: '黑龙江 ',
	31: '上海',
	32: '江苏',
	33: '浙江',
	34: '安徽',
	35: '福建',
	36: '江西',
	37: '山东',
	41: '河南',
	42: '湖北 ',
	43: '湖南',
	44: '广东',
	45: '广西',
	46: '海南',
	50: '重庆',
	51: '四川',
	52: '贵州',
	53: '云南',
	54: '西藏 ',
	61: '陕西',
	62: '甘肃',
	63: '青海',
	64: '宁夏',
	65: '新疆',
	71: '台湾',
	81: '香港',
	82: '澳门',
	91: '国外 '
};
const IdentityCode_isCardNo = (card: string): boolean => {
	const reg: RegExp = /(^\d{15}$)|(^\d{17}(\d|X)$)/;
	return reg.test(card);
};
const IdentityCode_checkProvince = (card: string): boolean => {
	const province: string = card.substr(0, 2);
	return aIdentityCode_City[province] == undefined;
};
const IdentityCode_checkBirthday = (card: string): boolean => {
	const len: number = card.length;
	if (len === 15) {
		const re_fifteen: RegExp = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
		const arr_data = card.match(re_fifteen); // 正则取号码内所含出年月日数据
		const year: string | null = arr_data && arr_data[2];
		const month: string | null = arr_data && arr_data[3];
		const day: string | null = arr_data && arr_data[4];
		const birthday: Date = new Date('19' + year + '/' + month + '/' + day);
		return IdentityCode_verifyBirthday('19' + year, month, day, birthday);
	}
	if (len === 18) {
		const re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
		const arr_data = card.match(re_eighteen); // 正则取号码内所含出年月日数据
		const year: string | null = arr_data && arr_data[2];
		const month: string | null = arr_data && arr_data[3];
		const day: string | null = arr_data && arr_data[4];
		const birthday: Date = new Date(year + '/' + month + '/' + day);
		return IdentityCode_verifyBirthday(year, month, day, birthday);
	}
	return false;
};
const IdentityCode_verifyBirthday = (year, month, day, birthday): boolean => {
	const now = new Date();
	const now_year = now.getFullYear();
	if (birthday.getFullYear() == year && birthday.getMonth() + 1 == month && birthday.getDate() == day) {
		const time = now_year - year;
		if (time >= 3 && time <= 150) {
			return true;
		}
		return false;
	}
	return false;
};
const IdentityCode_checkParity = (card): boolean => {
	card = IdentityCode_changeFivteenToEighteen(card);
	const len = card.length;
	if (len === 18) {
		const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
		const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
		let cardTemp = 0,
			i;
		for (i = 0; i < 17; i++) {
			cardTemp += card.substr(i, 1) * arrInt[i];
		}
		const valnum = arrCh[cardTemp % 11];
		if (valnum == card.substr(17, 1)) {
			return true;
		}
		return false;
	}
	return false;
};
const IdentityCode_changeFivteenToEighteen = (card): string => {
	if (card.length === 15) {
		const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
		const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
		let cardTemp: number = 0,
			i;
		card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
		for (i = 0; i < 17; i++) {
			cardTemp += card.substr(i, 1) * arrInt[i];
		}
		card += arrCh[cardTemp % 11];
		return card;
	}
	return card;
};

const IdentityCode_checkSex = (card: string): boolean => {
	const iCard = IdentityCode_changeFivteenToEighteen(card);
	return parseInt(iCard.charAt(16)) === 1 || parseInt(iCard.charAt(16)) === 0;
};
/**
 * 验证15或者18位身份证号码是否合格。
 * @group 工具函数
 * @param value 身份证号码
 * @param reg
 * @returns 返回一个布尔值，通过返回true
 * @example
 * ```ts
 * validateIdNumber('420102199003078776')    //  true
 * ```
 */
export const validateIdNumber = (value: string): boolean => {
	return (
		IdentityCode_isCardNo(value) &&
		IdentityCode_checkProvince(value) &&
		IdentityCode_checkBirthday(value) &&
		IdentityCode_checkParity(value) &&
		IdentityCode_checkSex(value)
	);
};
