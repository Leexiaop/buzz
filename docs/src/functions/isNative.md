[**buzzs**](../README.md) • **Docs**

***

# 函数: isNative()

> **isNative**(`value`): `boolean`

判断某个方法是不是浏览器内置方法

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `string` | 要检查的方法 |

## 返回值类型

`boolean`

返回一个布尔值

## 示例

```ts
isNative('onload')   //  true
```

## 查看源码

[isNative.ts:12](https://github.com/Leexiaop/buzz/blob/cc7ebdce95907736175ef75943200be67c26217f/src/isNative.ts#L12)
