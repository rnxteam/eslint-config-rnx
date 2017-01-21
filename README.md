# eslint-config-rnx

[![npm](https://img.shields.io/npm/v/eslint-config-rnx.svg?maxAge=60)](https://www.npmjs.com/package/eslint-config-rnx)
[![npm](https://img.shields.io/npm/dt/eslint-config-rnx.svg?maxAge=60)](https://www.npmjs.com/package/eslint-config-rnx)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dragonwong/eslint-config-rnx/master/LICENSE)

RNX's ESLint config, for a better code style.

## 编码规范

1. 基本遵循 [AirBnb 编码规范](https://github.com/airbnb/javascript)；
2. 支持 ES7；
3. 允许在 JS 文件中使用 JSX；
4. 允许类的非静态方法不使用 `this`；
5. 关闭引用路径检查；
6. 允许无状态的组件不被写成纯函数形式；
7. 允许独立 `if`（[参考](http://eslint.org/docs/rules/no-lonely-if)）。

## 开始

### 1. 安装 eslint

#### 1.1 安装 npm 依赖

在项目根目录下执行：

```bash
npm install eslint-config-rnx --save-dev
```

#### 1.2 创建 `.eslintrc` 文件

指定使用 RNX 编码规范。在项目根目录下创建 `.eslintrc` 文件。

```js
{
  // 使用 RNX 编码规范
  extends: 'eslint-config-rnx',
}
```

### 2. 安装 Atom 插件（可选）

使 Atom 支持 eslint 规范检查。

```bash
# 安装 linter 插件
apm install linter
# 安装 linter-eslint 插件
apm install linter-eslint
```

### 3. 安装 editorconfig（可选）

主要为使 tab 键符合编码规范的同时不至于影响 Atom 中的其他项目。

#### 3.1 安装 Atom 插件

使 Atom 支持 editorconfig。

```bash
apm install editorconfig
```

#### 3.2 创建 `.editorconfig` 文件

配置缩进（使用双空格缩进）。在项目根目录下创建 `.editorconfig` 文件。

```
root = true

[*.js]
indent_style = space
indent_size = 2
```

### 4. 运行

在项目根目录下执行：

```bash
./node_modules/.bin/eslint <filename/directory>
```

如果安装了 Atom 插件，那么自动运行，并在 Atom 下方显示实时状态。

## 提示

1. `.editorconfig` 不是实时生效的，你需要重启 Atom 后才能生效；
2. `.eslintrc` 也不是实时生效的，你需要在 Atom 中运行 `linter: lint` 命令或者重新打开待检测文件才能生效；
3. 在 Atom 中运行 `Linter Eslint: Fix File` 命令可以让 Atom 自动完成简单的格式化操作。
