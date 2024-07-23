[**buzzs**](../README.md) • **Docs**

***

# 函数: deepClone()

> **deepClone**(`target`, `hash`): `any`

将目标结构实现深拷贝

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `target` | `any` | 需要深拷贝的任意类型的目标数据 |
| `hash` | `WeakMap`\<`object`, `any`\> | 存储循环引用的hash结构 |

## 返回值类型

`any`

返回一个与target数据类型项目的克隆版

## 示例

```ts
let obj = {a:1, b: 2}
let item = deepClone(obj) // {a:1, b: 1}
obj.a = 5
console.log(obj) //  {a:5, b:2}
console.log(item)    //  {a: 1, b: 2}
```

## 查看源码

[deepClone.ts:16](https://github.com/Leexiaop/buzz/blob/777764f87ed5bc92158fd2e9b7456d28948d62a1/src/deepClone.ts#L16)
