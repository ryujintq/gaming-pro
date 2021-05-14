import bcrypt from 'bcrypt'

const matchPassword = async (enteredPassword, actualPassword) => {
    return await bcrypt.compare(enteredPassword, actualPassword)
}

export default matchPassword
