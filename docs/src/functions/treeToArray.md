[**buzzs**](../README.md) • **Docs**

***

# 函数: treeToArray()

> **treeToArray**(`tree`): `any`[]

将一个数组结构的树形结构扁平后，返回一个一维的数组

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `tree` | `any` | 可以是一个数组或者是一个对象 |

## 返回值类型

`any`[]

返回一个扁平后的一维数组

## 示例

```ts
const list = [
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

```

## 查看源码

[treeToArray.ts:68](https://github.com/Leexiaop/buzz/blob/7b12692d0748898621f219703f0b1bfce5c31863/src/treeToArray.ts#L68)
