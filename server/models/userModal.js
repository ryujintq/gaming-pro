import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String
})

userSchema.methods.matchPasswords = async (enteredPassword) => {
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('User', userSchema)

