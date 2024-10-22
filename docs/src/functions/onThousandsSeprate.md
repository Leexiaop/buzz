[**buzzs**](../README.md) • **Docs**

***

# 函数: onThousandsSeprate()

> **onThousandsSeprate**(`num`, `decimals`?, `point`?, `thousandsPoint`?): `string`

将一个数字按照指定的格式转化为千分符数字并返回转化后的数字

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `num` | `number` | 需要转换的数字 |
| `decimals`? | `number` | 需要保留的小数位数默认2位 |
| `point`? | `string` | 小数点符号默认为英文句号(.) |
| `thousandsPoint`? | `string` | 千分位符号默认为英文逗号(,) |

## 返回值类型

`string`

返回一个字符串

## 示例

```ts
onThousandsSeprate(222)	//	222.00
onThousandsSeprate(2113322)	//	2,113,322.00
```

## 查看源码

[onThousandsSeprate.ts:16](https://github.com/Leexiaop/buzz/blob/cc7ebdce95907736175ef75943200be67c26217f/src/onThousandsSeprate.ts#L16)
