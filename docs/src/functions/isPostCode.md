[**buzzs**](../README.md) • **Docs**

***

# 函数: isPostCode()

> **isPostCode**(`value`): `boolean`

检查是否为合法的国内邮政编码

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `value` | `string` | 检查的字符 |

## 返回值类型

`boolean`

返回bool值

## 示例

```ts
isPostCode("123")    //  false
isPostCode("100000")     //  true
```

## 查看源码

isPostCode.ts:12
