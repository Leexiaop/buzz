**buzzs** • [**Docs**](globals.md)

***

# buzzs 简介

这是一个具有完整基础设施并且使用 typescript 开发的 javascript 库项目开发模板, 帮助你快速搭建一个自动生成文档的 javascript 工具库.

# 用法

在任何你想要使用 buzzs 的项目根目录执行命令：

```js
npm install buzzs
```

即可安装，使用方式：

```js
import { add } from 'buzzs';

const sum = add(1, 2); //  3
```

# 开发文档

## 主要文件结构

```txt
buzz/
│
├── build/
│ └── index.js // 用于自动生成项目入口文件 src/index.ts 的脚本文件
│
├── src/
│ ├── add.ts // 开发的函数文件
│ └── index.ts // 项目打包的入口文件，可以通过脚本自动生成，也可以手动编辑，但优先通过执行脚本生成
│
├── test/ // 测试文件
│
├── vite.config.ts // vite 的配置文件
│
├── typedoc.config.cjs/ // typedoc 的配置文件
│
├── tsconfig.json/ // typescript 的配置文件
│
└── docs/ // 项目文档的文件
├── .vitepress // vitepress 的配置文件和主题等
└── src // 通过 typedoc 自动生成的文档文件
```

-   开发过程中我们主需要关注 src 目录即可，在这个目录下，创建要开发的方法即可，注意：`请保持文件名和函数名一直`。

-   开发方法的过程中，请严格按照 typescript 语义化标准开发，请减少类似于 any 等类型的使用。

-   请为函数体写好注释，这是我们通过 vitepress 生成文档的关键。具体语法可以参考 typedoc 官网: https://www.typedoc.cn/guides/overview/

命令解析：

```json
{
	"scripts": {
		"dev": "vite build --watch",    //  监听构建
		"build": "vite build",  //  构建命令
		"docs:dev": "concurrently \"typedoc --watch\" \"vitepress dev docs\"",  //  实时监听文件变更，生成实时文档
		"docs:build": "typedoc && vitepress build docs",    //  文当build命令会在docs/.vitepress/dist，生成dist文件包供部署文档用
		"docs:preview": "vitepress preview docs",   //  预览文档
		"update": "node build/index.js",    //  开发完成后，生成入口文件
		"release": "dotenv release-it",     //  部署
		"release:ci": "dotenv release-it --ci",     //  部署
		"demo:web": "vite",     // web端测试
		"demo:node": "node test/demo.node.js",  //  node端测试
		"test": "vitest"    //  vitest测试
	}
}
```

## 示例

````ts
/**
 * @name 这是一个说hello的方法
 * @group 工具函数
 * @param name 名称
 * @returns
 * @example
 * ```ts
 * console.log(sayHello('hacxy')); // Hello, hacxy!
 * ```
 */
export const add = (name: string): string => {
  return `Hello, ${name}!`;
};
````

# 项目搭建流程
