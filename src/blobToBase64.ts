/**
 * blob转为base64
 * @group 工具函数
 * @param {blob} blob blob对象
 * @param {Function} callback 回调函数
 * @return 通过回调函数可以获取到转换后的base64内容
 */
export const blobToBase64 = (blob: Blob, callback: (param) => void):void => {
	const freader = new FileReader();
	freader.readAsDataURL(blob);
	freader.onload = (e) => {
		callback(e.target.result);
	};
};
