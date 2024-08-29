[**buzzs**](../README.md) • **Docs**

***

# 函数: cashNumberToChinese()

> **cashNumberToChinese**(`dValue`): `string`

将阿拉伯数字转为汉字的金额，支持负数

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `dValue` | `string` |  |

## 返回值类型

`string`

返回一个中文金额

## 示例

```ts
cashNumberToChinese('211234.89')    //  贰拾壹万壹仟贰佰叁拾肆捌角玖分
```

## Remark

支持负数，并且会保留俩位小数

## 查看源码

cashNumberToChinese.ts:12
