// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  return this.toLowerCase().charAt(0).toUpperCase() + this.toLowerCase().slice(1)
}

// eslint-disable-next-line default-param-last
function isBoolean (value) {
  return typeof value === 'boolean'
}

// eslint-disable-next-line default-param-last
function includes (source = [], element) {
  return source.length && element && source.indexOf(element) > -1
}

// eslint-disable-next-line default-param-last
function has (source = {}, key) {
  // eslint-disable-next-line  no-prototype-builtins
  return source.hasOwnProperty(key)
}

function get (source, key) {
  return source[key]
}

function ignoreLogging (err) {
  // eslint-disable-next-line no-extra-boolean-cast
  if (err.showConlseLog) {
    console.error(err.message)
  }

  err.noLogging = true
  err.noSentryLogging = true
}

function map (array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

module.exports = {
  isBoolean,
  includes,
  has,
  get,
  ignoreLogging,
  map,
}
