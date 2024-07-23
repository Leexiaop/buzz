/**
 * 将一个数组结构的树形结构扁平后，返回一个一维的数组
 * @group 工具函数
 * @param {Array} tree 可以是一个数组或者是一个对象
 * @returns {Array} 返回一个扁平后的一维数组
 * @example
 * ```ts
 * const list = [
    {
        id: 1,
        name: '部门1',
        pid: 0,
        children: [
            {
                id: 2,
                name: '部门1-1',
                pid: 1,
                children: [
                    {
                        id: 4, 
                        name: '部门1-1-1', 
                        pid: 2,
                        children: []
                    }
                ]
            },
            {
                id: 3,
                name: '部门1-2',
                pid: 1,
                children: [
                    {
                        id: 5, 
                        name: '部门1-2-1', 
                        pid: 3,
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: '部门2',
        pid: 0,
        children: [
            {
                id: 7, 
                name: '部门2-1', 
                pid: 6,
                children: []
            }
        ]
    },
    {
        id: 8,
        name: '部门3',
        pid: 0,
        children: []
    }
]

const arr = treeToArray(list)
console.log(arr)

 * ```
*/
export const treeToArray = (tree) => {
	const result = [];
	getItem(tree, result);
	return result;
};

const getItem = (tree, result) => {
	for (let i = 0; i < tree.length; i++) {
		if (tree[i].children) {
			getItem(tree[i].children, result);
			delete tree[i].children;
		}
		result.push(tree[i]);
	}
	return result;
};
