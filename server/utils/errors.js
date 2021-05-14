import ErrorResponse from './errorResponse.js'

export const errorInvalidCredentials = () => {
    return new ErrorResponse('Invalid Credentials', 401)
}
