
/**
 * 判断当前环境是否为微信环境
 * @group 微信
 * @returns 返回一个boolean值，true为是微信环境，fasle是非微信环境
 * @example
 * ```ts
 * isWechat()   //  false
 * ```
 */
export const isWechat = (): boolean => {
	const ua = window.navigator.userAgent.toLowerCase();
	return !!ua.match(/micromessenger/i);
};