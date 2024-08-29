[**buzzs**](../README.md) • **Docs**

***

# 函数: onVersionCompare()

> **onVersionCompare**(`version1`, `version2`): `number`

比较俩个用英文{.}分割的版本号的大小

## 参数

| 参数名 | 类型 | 描述 |
| :------ | :------ | :------ |
| `version1` | `string` | 比较的版本号 |
| `version2` | `string` | 比较的版本号 |

## 返回值类型

`number`

返回一个数字，-1代表version1大，1表示version2大，0表示version1和version2相等

## 示例

```ts
onVersionCompare("1.0.1", "1.2.4")   //  1
onVersionCompare("2.0.1", "1.2.4")   //  -1
onVersionCompare("1.2.4", "1.2.4")   //  0
```

## 查看源码

onVersionCompare.ts:14
