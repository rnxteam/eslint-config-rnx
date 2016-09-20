# eslint-config-pintec

Pintec's ESLint config, for a better code style.

## 编码规范

1. 基本遵循 [AirBnb 编码规范](https://github.com/airbnb/javascript)；
2. 支持 ES7；
3. 允许在 JS 文件中使用 JSX；
4. 允许类的非静态方法不使用 `this`；

## 开始

### 1. 安装 eslint

#### 1.1 安装 Atom 插件

使 Atom 支持 eslint 规范检查。

```bash
# 安装 linter 插件
apm install linter
# 安装 linter-eslint 插件
apm install linter-eslint
```

#### 1.2 安装 npm 依赖

在项目根目录下执行。

```bash
npm install eslint-config-pintec --save-dev
```

#### 1.3 创建 `.eslintrc` 文件

指定使用 Pintec 编码规范。在项目根目录下创建 `.eslintrc` 文件。

```bash
{
  # 使用 Pintec 编码规范
  extends: 'eslint-config-pintec',
}
```

### 2. 安装 editorconfig（可选）

主要为使 tab 键符合编码规范的同时不至于影响 Atom 中的其他项目。

#### 2.1 安装 Atom 插件

使 Atom 支持 editorconfig。

```bash
apm install editorconfig
```

#### 2.2 创建 `.editorconfig` 文件

配置缩进（使用双空格缩进）。在项目根目录下创建 `.editorconfig` 文件。

```
root = true

[*.js]
indent_style = space
indent_size = 2
```

## 提示

1. `.editorconfig` 不是实时生效的，你需要重启 Atom 后才能生效；
2. `.eslintrc` 也不是实时生效的，你需要在 Atom 中运行 `linter: lint` 命令或者重新打开待检测文件才能生效；
3. 在 Atom 中运行 `Linter Eslint: Fix File` 命令可以让 Atom 自动完成简单的格式化操作；

### 如何引用 `@providesModule` 声明的模块

当前编码风格是不允许引用 `node_modules/` 下不存在的模块的。也就是，Facebook 通过 `@providesModule` 声明的模块，如果在项目中通过模块名去引用是不被允许的（写路径可以解决）。

这时可以通过如下配置，添加例外情况：

```js
{
  extends: 'eslint-config-pintec',
  rules: {
    'import/no-unresolved': [2, { ignore: ['NavigatorNavigationBar'] }],
  },
}
```
