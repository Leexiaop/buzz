/**
 * 将数组通过id和指定关系的字段转换成树形结构数组。
 * @group 工具函数
 * @param {Array} list 需要转为树的原始数组
 * @param {string} key 原始指定的树的parentId
 * @returns {Array} 返回一个包含树形状结构的数组
 * @example
 * ```ts
 const list = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门1-1', pid: 1},
    {id: 3, name: '部门1-2', pid: 1},
    {id: 4, name: '部门1-1-1', pid: 2},
    {id: 5, name: '部门1-2-1', pid: 3},
    {id: 6, name: '部门2', pid: 0},
    {id: 7, name: '部门2-1', pid: 6},
    {id: 8, name: '部门3', pid: 0},
]
 arrayToTree(list, 'pid');
 [
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
 * ```
 */

export const arrayToTree = (list: Array<{ id: number }>, key: string): Array<{ id: number }> => {
	return list.filter(function (parent) {
		const branchArr = list.filter((child) => parent.id === child[key]);
		parent['children'] = branchArr.length > 0 ? branchArr : [];
		return parent[key] === 0;
	});
};
