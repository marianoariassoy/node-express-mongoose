import mongoose from 'mongoose'

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
  image: String
})

export const productsModel = mongoose.model(productsCollection, productsSchema)
