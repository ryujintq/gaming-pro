import ErrorResponse from './errorResponse.js'

export const errorInvalidCredentials = () => {
    return new ErrorResponse('Invalid Credentials', 401)
}

export const errorUserExists = () => {
    return new ErrorResponse('User already exists', 400)
}

