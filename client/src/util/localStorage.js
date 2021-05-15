const PREFIX = 'GAMING-PRO-'

export const localStorageGet = (key) => {
    const prefixedKey = PREFIX + key
    return localStorage.getItem(prefixedKey)
}

export const localStorageSet = (key, value) => {
    const prefixedKey = PREFIX + key
    return localStorage.setItem(prefixedKey, value)
}

export const localStorageRemove = key => {
    const prefixedKey = PREFIX + key
    return localStorage.removeItem(prefixedKey)
}
