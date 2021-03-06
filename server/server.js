import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import connectDB from './utils/connectDB.js'
import errorMiddleware from './middleware/errorMiddleware.js'
import dotenv from 'dotenv'
dotenv.config() //use for .env file

//start connection to database
connectDB()

//initialize app and middleware
const app = express()
app.use(cors())
app.use(express.json())

//routes
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/products', productRoutes)

//middleware (error middleware must come after routes)
app.use(errorMiddleware)

//server start listening 
const port = process.env.PORT
app.listen(port, console.log(`server running on port ${port}`))
