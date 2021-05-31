import mongoose from 'mongoose'
import connectDB from './utils/connectDB.js'
import Product from './models/productModal.js'
import User from './models/userModal.js'
import users from './data/users.js'
import products from './data/products.js'
import dotenv from 'dotenv'
dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data imported')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data destroyed')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}