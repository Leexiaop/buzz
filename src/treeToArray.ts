import { deepClone } from './deepClone.ts';

/**
 * 将一个对象结构，或者是数组结构的树形结构扁平后，返回一个一维的数组
 * @group 工具函数
 * @param {Array | Object} treeObj 可以是一个数组或者是一个对象
 * @param {string} rootid 根节点
 * @returns {Array} 返回一个扁平后的一维数组
 * @example
 * ```ts
 * ```
 */
export const treeToArray = (treeObj, rootid) => {
	let temp = [];
	const out = [];
	let pid = '';
	if (Array.isArray(treeObj)) {
		temp = deepClone(treeObj);
	} else {
		temp.push(treeObj);
		pid = rootid;
		const obj = deepClone(treeObj);
		obj.pid = pid;
		delete obj['children'];
		out.push(obj);
	}
	while (temp.length > 0) {
		const first = temp.shift();
		const children = first.children;
		if (children && children.length > 0) {
			pid = first.id;
			const len = first.children.length;
			for (let i = 0; i < len; i++) {
				temp.push(children[i]);
				const obj = deepClone(children[i]);
				obj.pid = pid;
				delete obj['children'];
				out.push(obj);
			}
		}
	}
	return out;
};
