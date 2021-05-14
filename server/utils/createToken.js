import jwt from 'jsonwebtoken'

const createToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

export default createToken
