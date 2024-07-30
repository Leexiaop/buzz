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

[validateIdentifyNumber.ts:12](https://github.com/Leexiaop/buzz/blob/55a146517984fc8673084656b05bf607efa1e1f3/src/validateIdentifyNumber.ts#L12)
