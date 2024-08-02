[**buzzs**](../README.md) • **Docs**

***

# 函数: validateIdentifyNumber()

> **validateIdentifyNumber**(`value`, `reg`?): `boolean`

验证统一征信码是否合格，支持自定义验证规则。

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `string` | 统一征信码 |
| `reg`? | `RegExp` | 自定义规则，可选参数 |

## 返回值类型

`boolean`

返回一个布尔值，通过返回true

## 示例

```ts
validateIdentifyNumber('IOZSVa9892844782992')    //  fasle
```

## 查看源码

[validateIdentifyNumber.ts:12](https://github.com/Leexiaop/buzz/blob/7b12692d0748898621f219703f0b1bfce5c31863/src/validateIdentifyNumber.ts#L12)
