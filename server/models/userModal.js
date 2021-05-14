import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true }
})

userSchema.methods.matchPasswords = async (enteredPassword) => {
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema)
