const PREFIX = 'GAMING-PRO-'

export const localStorageGet = (key) => {
    const prefixedKey = PREFIX + key
    return localStorage.getItem(prefixedKey)
}

export const localStorageGet = (key, value) => {
    const prefixedKey = PREFIX + key
    return localStorage.setItem(prefixedKey, value)
}

export const localStorageGet = key => {
    const prefixedKey = PREFIX + key
    return localStorage.removeItem(prefixedKey)
}
