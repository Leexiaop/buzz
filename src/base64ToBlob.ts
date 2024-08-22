/**
 * 将base64转化为blob流
 * @group 工具函数
 * @param {string} base64 要转化的base64字符串
 * @returns {Blob} 返回转化后的blob对象
 */
export const base64ToBlob = (base64: string): Blob => {
	const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/);
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type: mime[1]});
};
