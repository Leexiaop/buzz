**buzzs** • [**Docs**](globals.md)

***

# buzzs 简介

这是一个具有完整基础设施并且使用 typescript 开发的 javascript 库项目开发模板, 帮助你快速搭建一个自动生成文档的 javascript 工具库.

# 用法

在任何你想要使用 buzzs 的项目根目录执行命令：

```shell
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
		"dev": "vite build --watch", //  监听构建
		"build": "vite build", //  构建命令
		"docs:dev": "concurrently \"typedoc --watch\" \"vitepress dev docs\"", //  实时监听文件变更，生成实时文档
		"docs:build": "typedoc && vitepress build docs", //  文当build命令会在docs/.vitepress/dist，生成dist文件包供部署文档用
		"docs:preview": "vitepress preview docs", //  预览文档
		"update": "node build/index.js", //  开发完成后，生成入口文件
		"release": "dotenv release-it", //  部署
		"release:ci": "dotenv release-it --ci", //  部署
		"demo:web": "vite", // web端测试
		"demo:node": "node test/demo.node.js", //  node端测试
		"test": "vitest" //  vitest测试
	}
}
```

## 示例

````ts
/**
 * @name 这是一个计算俩数相加的方法
 * @group 工具函数
 * @param a number类型，必传
 * @param b number类型，必传
 * @returns (number) 返回一个俩数相加后的number
 * @example
 * ```ts
 * console.log(add(2，4)); // 6
 * ```
 */
export const add = (a: number, b: number): number => {
	return a + b;
};
````

其中 group 字段应该为`['数组', '集合', '函数', '语言', '数学', '数字', '对象', 'Seq', '字符串', '实用函数', '其他']`。

## 测试用例

### 单元测试

单元测试，我们可以通过 vitest,进行单元测试，可以得出覆盖率等，相关测试结果，也可以自己编写测试代码，但是这些都是在 test 目录下进行。

### 项目测试

项目测试可以通过命令`npm link`将库创建软链，在需要安装的项目中使用命令`npm link buzzs`添加到项目中，实际调用即可。

# 项目搭建流程

## 所需主要插件

-   vite
-   typescript
-   vitepress
-   typedoc
-   vitest

## 创建过程

### 项目初始化

1. 我们通过命令`mkdir buzz`创建一个文件夹，这里就是我们 buzz 的工程，然后`cd buzz`,进入 buzz 文件夹后，通过命令`npm init -y`, 来初始化一个项目，这时候，将会自动生成一个 package.json 文件。
2. 在根目录下创建 src 文件夹，里面创建 index.ts 文件。src/index.ts 这里就是我们开发的文件入口文件：我们在其中写一个加法函数：

```ts
export const add = (a: number, b: number): number => {
	return a + b;
};
```

3. 接下来我们就安装 vite，通过命令 npm install vite --save-dev,并且在根目录下创建 vite.config.js,这里是 vite 的配置文件，打开文件，我们写下:

```ts
import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'buzzs',
			formats: ['es', 'cjs', 'iife', 'umd'],
			file方法名称: 'index'
		}
	},
	optimizeDeps: {
		entries: []
	}
});
```

其中，build 是我们打包构建的配置:

1. entry 是打包的入口文件
2. name 是未来我们在项目中安装此包后，进入的全局变量
3. formats 打包后生成不同产物的不同格式
4. 打包产物的名称

打开 package.json 配置命令

```json
{
    ...,
    "type": "module",
    "main": "./dist/index.cjs",
    "module": "./dist/index.js",
    "types": "./dist/index.d.ts",
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
    }
}
```

到目前为止，我们无论我们运行 npm run dev 还是 npm run build 都能正常运行了，所以接下来，我们就是要支持他 typescript,因为 vite 本身是支持 typescript 的，所以我们在 src/index.ts 写 typescript 语法是没有问题的。但是我们并不能打包得到 index.d.ts 文件，所以，还需要一个插件 vite-plugin-dts,配置在 plugins 中即可。再次运行 npm run build 即可打包出 index.d.ts 文件。此时一个基本的库已经成型，但是这还远远不够。

### 添加文档

一个 js 库，没有文档，那将是灾难级的，所以，接下来，我们就配置生成一下文档。这个库的名字叫 vitepress.这是一个自定生成 doc 的库，而且还需要配合 typedoc 和 typedoc-plugin-markdown 来自动生成文档。

1. 通过命令 npx vitepress init 初始化 docs 文件，就是我们创建成功的文档。所以我们要在 package.json 中配置文档的启动命令。

````json
    {
        ...
        scripts: {
            "docs:dev": "vitepress dev docs",
            "docs:build": "vitepress build docs",
            "docs:preview": "vitepress preview docs"
        }
        ...
    }
````
注意：如果发现vitepress没有安装，请通过命令npm add vitepress -D来安装。这样运行命令npm run docs:dev就可以在浏览器预览文档了。

### 自动生成文档

上一步虽然安装了vitepress，但是，我们并不能自动生成文档，还需要我们手动来编写开发文档，这样效率还是很低，那么可不可以自动生成文档呢？当然可以，typedoc插件就是干这个的，我们通过为函数编写注释来自动生成文档。
1. 首先我们安装typedoc;
```shell
npm install typedoc;
```
这样我们就安装了vitepress,但是我们想要生成的是markdown文档，所以我们还需要另外一个插件，typedoc-plugin-markdown：
```shell
npm install typedoc-plugin-markdown concurrently
```
直接安装即可。另外，我们再安装一个插件concurrently,这个包是同时执行多个命令。到现在为止我们的插件就安装完成。那么下面我们开始配置启动文档命令：

```json
{
    ...
    scripts: {
        "docs:dev": "concurrently \"typedoc --watch\" \"vitepress dev docs\" ",
        "docs:build": "typedoc && vitepress build docs",
        "docs:preview": "vitepress preview docs",
    }
    ...
}
```
