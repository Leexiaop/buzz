[**buzzs**](../README.md) • **Docs**

***

# 函数: arrayToTree()

> **arrayToTree**(`list`, `key`): `object`[]

将数组通过id和指定关系的字段转换成树形结构数组。

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `list` | `object`[] | 需要转为树的原始数组 |
| `key` | `string` | 原始指定的树的parentId |

## 返回值类型

`object`[]

返回一个包含树形状结构的数组

## 示例

```ts
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
```

## 查看源码

[arrayToTree.ts:77](https://github.com/Leexiaop/buzz/blob/1bf6be662b62c3cc29c31979dd4941f9cefb5af2/src/arrayToTree.ts#L77)
