import CryptoJS from 'crypto-js'

const keySize = 256
const iterations = 100
const secretKey = process.env.REACT_APP_SECRET_KEY

export function randomPassword(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890'
  let pass = ''

  for (let x = 0; x < length; x++) {
    const i = Math.floor(Math.random() * chars.length)
    pass += chars.charAt(i)
  }

  return pass
}

export function hmacEncrypt(message) {
  const encrypted = CryptoJS.HmacSHA256(message, secretKey)
  return encrypted.toString(CryptoJS.enc.Base64)
}

export function encrypt(payload) {
  const salt = CryptoJS.lib.WordArray.random(128 / 8)
  const iv = CryptoJS.lib.WordArray.random(128 / 8)
  const key = CryptoJS.PBKDF2(secretKey, salt, {
    keySize: keySize / 32,
    iterations: iterations,
  })
  const encrypted = CryptoJS.AES.encrypt(payload, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  })

  return salt.toString() + iv.toString() + encrypted.toString()
}

export function decrypt(payload) {
  const salt = CryptoJS.enc.Hex.parse(payload.substr(0, 32))
  const iv = CryptoJS.enc.Hex.parse(payload.substr(32, 32))
  const encrypted = payload.substring(64)
  const key = CryptoJS.PBKDF2(secretKey, salt, {
    keySize: keySize / 32,
    iterations: iterations,
  })

  return CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  }).toString(CryptoJS.enc.Utf8)
}

export function isList(val) {
  return val != null && typeof val != 'function' && typeof val.length == 'number'
}

export function isFunction(val) {
  return val && {}.toString.call(val) === '[object Function]'
}

export function isObject(val) {
  return val && {}.toString.call(val) === '[object Object]'
}

export function isArray(val) {
  return Array.isArray(val)
}

export function pathName() {
  return window.location.pathname
}

export function pathNames(val) {
  const path = val ? val : pathName()
  return path
    .split('/')
    .filter(f => f !== '')
    .map(m => `/${m}`)
}
