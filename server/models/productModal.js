import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
    numOfReviews: Number,
    image: String,
    brand: String,
    category: String,
    price: Number,
    countInStock: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default mongoose.model('Product', productSchema)