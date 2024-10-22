[**buzzs**](../README.md) • **Docs**

***

# 函数: validatePhoneNumber()

> **validatePhoneNumber**(`value`, `reg`?): `boolean`

验证座机和手机号是否合格，支持自定义验证规则。

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `string` | 号码 |
| `reg`? | `RegExp` | 自定义规则，可选参数 |

## 返回值类型

`boolean`

返回一个布尔值，通过返回true

## 示例

```ts
validatePhoneNumber('13691388209')    //  true
validatePhoneNumber('01022458779')    //  true
validatePhoneNumber('010-22458779')    //  true
```

## Remarks

*注意不支持国外号码，不支持地区码校验，不支持分机号

## 查看源码

[validatePhoneNumber.ts:15](https://github.com/Leexiaop/buzz/blob/cc7ebdce95907736175ef75943200be67c26217f/src/validatePhoneNumber.ts#L15)
