/**
 * 将base64转化为blob流
 * @group 工具函数
 * @param {string} base64 要转化的base64字符串
 * @param {string} filename 输出的文件名
 * @returns {File} 返回转化后的File对象
 * @remark 低版本IE不兼容
 */
export const base64ToFile = (base64: string, filename: string): File => {
	const arr = base64.split(',');
	const mime = arr[0].match(/:(.*?);/);
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new File([u8arr], filename, { type: mime[1] });
};
