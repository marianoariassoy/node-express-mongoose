import express from 'express'
import userstRouter from './routes/users.router.js'
import productsRouter from './routes/products.router.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userstRouter)
app.use('/api/products', productsRouter)

const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
server.on('error', error => console.log('Error: ', error))

mongoose.connect('mongodb+srv://santo:santo@cluster0.8ix6f.mongodb.net/?retryWrites=true&w=majority')
