[**buzzs**](../README.md) • **Docs**

***

# 函数: validateEmail()

> **validateEmail**(`value`, `reg`?): `boolean`

验证邮箱地址是否合格，支持自定义验证规则。

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `string` | 邮箱地址 |
| `reg`? | `RegExp` | 自定义规则，可选参数 |

## 返回值类型

`boolean`

返回一个布尔值，通过返回true

## 示例

```ts
validateEmail('buzzs1369872@yeah.net')    //  true
```

## 查看源码

[validateEmail.ts:12](https://github.com/Leexiaop/buzz/blob/4387eb30161ab9a7932861d0bc5ba77270c20ee8/src/validateEmail.ts#L12)
