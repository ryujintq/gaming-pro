import bcrypt from 'bcrypt'

const users = [
    {
        firstName: 'Tariq',
        lastName: 'Al Nabhani',
        email: 'tariq@email.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: true
    },
    {
        firstName: 'Rocio',
        lastName: 'Saura',
        email: 'rocio@email.com',
        password: bcrypt.hashSync('12345678', 10)
    },
    {
        firstName: 'Reya',
        lastName: 'Al Nabhani',
        email: 'reya@email.com',
        password: bcrypt.hashSync('12345678', 10)
    },
    {
        firstName: 'Hisha',
        lastName: 'Shaban',
        email: 'hisham@email.com',
        password: bcrypt.hashSync('12345678', 10)
    },
]

export default users