/**
 * 判断当前环境是否为企业微信环境
 * @group 工具函数
 * @returns {boolean} 返回false为非企业微信环境，true为企业微信环境
 * @example
 * ```ts
 * isWorkWechat()   //  false
 * ```
 */
export const isWorkWechat = (): boolean => {
	const ua = window.navigator.userAgent.toLowerCase();
	return !!ua.match(/micromessenger/i) && !!ua.match(/wxwork/i);
};
