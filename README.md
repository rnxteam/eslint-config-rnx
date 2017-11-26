# fixfloat

[![npm](https://img.shields.io/npm/v/fixfloat.svg?maxAge=60)](https://www.npmjs.com/package/fixfloat)
[![npm](https://img.shields.io/npm/dt/fixfloat.svg?maxAge=60)](https://www.npmjs.com/package/fixfloat)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/dragonwong/fixfloat/master/LICENSE)

Fix float number bug in javascript.

```js
const fixfloat = require('fixfloat');

const floatNumber = 0.1 + 0.2;
console.log(floatNumber); // 0.30000000000000004
console.log(fixfloat(floatNumber)); // 0.3
```

## Install

```bash
npm install fixfloat --save
```

Enjoy it!