[**buzzs**](../README.md) • **Docs**

***

# 函数: camelize()

> **camelize**(`str`, `is`): `string`

将横线(-)或者下划线(_)转为驼峰

## 参数

| 参数名 | 类型 | 默认值 | 描述 |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 要转化的字符串 |
| `is` | `boolean` | `false` | 布尔值，默认false,表示是否要留下_或者- |

## 返回值类型

`string`

返回驼峰字符串

## 示例

```ts
console.log(camelize(is-json)) //    jsJson
```

## 查看源码

[camelize.ts:12](https://github.com/Leexiaop/buzz/blob/cc7ebdce95907736175ef75943200be67c26217f/src/camelize.ts#L12)
