import { isObject } from './util'

const store = {
  name: 'balidecor',
  use,
  get,
  set,
  each,
  remove,
  clear,
}
const storeName = store.name

function use(key, value) {
  const result = get(key)

  if (!result || result === undefined) {
    return set(key, value)
  }
  return result
}

function get(key) {
  const result = localStorage.getItem(`${storeName}-${key}`)
  return isObject(result) ? JSON.parse(result) : result
}

function set(key, data) {
  data = isObject(data) ? JSON.stringify(data) : data
  localStorage.setItem(`${storeName}-${key}`, data)
  return get(key)
}

function each(fn) {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const key = localStorage.key(i)
    fn(get(key), key)
  }
}

function remove(key) {
  return localStorage.removeItem(`${storeName}-${key}`)
}

function clear() {
  return localStorage.clear()
}

export default store
