[**buzzs**](../README.md) • **Docs**

***

# 函数: imageToBase64()

> **imageToBase64**(`url`, `callback`, `type`?): `void`

将图片转化为base64图片

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `url` | `string` | 图片地址 |
| `callback` | (`param`) => `void` | 回调函数 |
| `type`? | `string` | 可选参数，转出图片的类型，默认为'png' |

## 返回值类型

`void`

返回转换后base64图片的字符串

## Remark

注意网络图片的跨域问题

## 查看源码

[imageToBase64.ts:11](https://github.com/Leexiaop/buzz/blob/cc7ebdce95907736175ef75943200be67c26217f/src/imageToBase64.ts#L11)
