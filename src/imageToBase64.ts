
/**
 * 将图片转化为base64图片
 * @group 工具函数
 * @param {string} url 图片地址
 * @param {Function} callback 回调函数
 * @param {string} type 可选参数，转出图片的类型，默认为'png'
 * @return {string} 返回转换后base64图片的字符串
 * @remark 注意网络图片的跨域问题
 */
export const imageToBase64 = (url: string, callback: (param) => void, type?: string): void => {
	let canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	const img = new Image();
	img.crossOrigin = 'Anonymous';
	img.src = url + '?timeStamp=' + new Date().getTime();
	img.onload = function () {
		canvas.height = img.height;
		canvas.width = img.width;
		ctx.drawImage(img, 0, 0, img.width, img.height);
		const dataURL = canvas.toDataURL(type || `image/${type || 'png'}`);
		callback && callback(dataURL);
		canvas = null;
	};
};
