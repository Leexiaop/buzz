/**
 * 判断当前环境是否为移动设备
 * @group 工具函数
 * @returns 返回一个bolean值，true表示为移动端，false为非移动端
 * @example
 * ```ts
 * isMobile()   //  false当前环境为浏览器
 * ```
 */
export const isMobile = (): boolean => {
	return !!window.navigator.userAgent.match(
		/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
	);
};
