
/**
 * 判断当前环境是否为微信环境
 * @group 工具函数
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


// isWorkWechat: function() {
//     //获取user-agaent标识头
//     var ua = window.navigator.userAgent.toLowerCase();
//     //判断ua和微信浏览器的标识头是否匹配
//     if ((ua.match(/micromessenger/i) == 'micromessenger') && (ua.match(/wxwork/i) == 'wxwork')) {
//           return true;
//     } else {
//           return false;
//     }
// },