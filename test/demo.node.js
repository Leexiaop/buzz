import { arrayToTree } from '../dist/index.js';
const listTree = [
	{ id: 1, name: '部门1', pid: 0 },
	{ id: 2, name: '部门1-1', pid: 1 },
	{ id: 3, name: '部门1-2', pid: 1 },
	{ id: 4, name: '部门1-1-1', pid: 2 },
	{ id: 5, name: '部门1-2-1', pid: 3 },
	{ id: 6, name: '部门2', pid: 0 },
	{ id: 7, name: '部门2-1', pid: 6 },
	{ id: 8, name: '部门3', pid: 0 }
];
console.log(JSON.stringify(arrayToTree(listTree, 'pid'))); // 3
