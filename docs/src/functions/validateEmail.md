[**buzzs**](../README.md) • **Docs**

***

# 函数: validateEmail()

> **validateEmail**(`value`, `reg`?): `boolean`

验证邮箱地址是否合格，支持自定义验证规则。

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `any` | 邮箱地址 |
| `reg`? | `RegExp` | 自定义规则，可选参数 |

## 返回值类型

`boolean`

返回一个布尔值，通过返回true

## 示例

```ts
validateEmail('buzzs1369872@yeah.net')    //  true
```

## 查看源码

[validateEmail.ts:12](https://github.com/Leexiaop/buzz/blob/285d3ceaf2714f6a5ad01d8ffe11b3d730986a1f/src/validateEmail.ts#L12)