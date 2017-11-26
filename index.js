/**
 * fixFloat js 浮点数修复
 * @param {*} floatNumber float number
 * @param {*} digtal count of digtal after dot
 */
function fixfloat(floatNumber, digtal) {
  if (typeof digtal !== 'number') {
    digtal = 1;
  }
  const times = Math.pow(10, digtal);
  return Math.round(floatNumber * times) / times;
}

module.exports = fixfloat;