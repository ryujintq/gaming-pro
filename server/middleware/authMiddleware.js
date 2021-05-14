import jwt from 'jsonwebtoken'
import ErrorResponse from '../utils/errorResponse.js'

export default async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) return next(new ErrorResponse('you must be logged in', 401))

    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return next(new ErrorResponse('you must be logged in', 401))

        const { id } = payload
        req.id = id
        next()
    })
}
