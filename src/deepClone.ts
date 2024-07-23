/**
 * 将目标结构实现深拷贝
 * @group 语言
 * @param {any} target 需要深拷贝的任意类型的目标数据 
 * @param {Symbol} hash 存储循环引用的hash结构
 * @returns {any} 返回一个与target数据类型项目的克隆版
 * @example
 * ```ts
 * let obj = {a:1, b: 2}
 * let item = deepClone(obj) // {a:1, b: 1}
 * obj.a = 5
 * console.log(obj) //  {a:5, b:2}
 * console.log(item)    //  {a: 1, b: 2}
 * ```
 */
export const deepClone = (target, hash = new WeakMap()) => {
	if (typeof target !== 'object' || target !== null) {
		return target;
	}
	if (hash.has(target)) {
		return hash.get(target);
	}

	const cloneTarget = Array.isArray(target) ? [] : {};
	hash.set(target, cloneTarget);

	const symKeys = Object.getOwnPropertySymbols(target);
	if (symKeys.length) {
		symKeys.forEach((symKey) => {
			if (typeof target[symKey] === 'object' && target[symKey] !== null) {
				cloneTarget[symKey] = deepClone(target[symKey]);
			} else {
				cloneTarget[symKey] = target[symKey];
			}
		});
	}

	for (const i in target) {
		if (Object.prototype.hasOwnProperty.call(target, i)) {
			cloneTarget[i] === 'object' && target[i] !== null ? deepClone(target[i], hash) : target[i];
		}
	}
	return cloneTarget;
};
