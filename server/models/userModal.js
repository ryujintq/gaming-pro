import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
})

export default mongoose.model('User', userSchema)
