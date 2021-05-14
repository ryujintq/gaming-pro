import express from 'express'
import User from '../models/userModal.js'
import bcrypt from 'bcrypt'
import createToken from '../utils/createToken.js'
import { errorInvalidCredentials } from '../utils/errors.js'
import asyncHandler from '../middleware/asyncMiddleware.js'

const router = express.Router()

//desc      user login
//body      email, password
//access    public
//route     /api/users/login
router.post('/login', asyncHandler(async (req, res, next) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).lean()

    if (user && await user.matchPasswords(password)) {
        return res.status(200).json({
            status: 'success',
            data: { firstName: user.firstName, token: createToken(user._id) },
            message: 'login was successful'
        })
    }

    next(errorInvalidCredentials())
}))

//desc      user signup
//body      firstName, lastName, email, password
//access    public
//route     /api/users/signup
router.post('/signup', asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body
    let user = await User.findOne(email).lean()

    if (user) {
        next(errorInvalidCredentials())
    }

    user = new User({ firstName, lastName, email, password: await bcrypt.hash(password, 10) })

    await user.save()

    return res.status(200).json({
        status: 'success',
        data: { firstName: user.firstName, token: createToken(user._id) },
        message: 'login was successful'
    })
}))


export default router
