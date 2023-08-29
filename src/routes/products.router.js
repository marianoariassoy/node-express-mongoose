import { Router } from 'express'
import { productsModel } from '../models/products.model.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    let users = await productsModel.find()
    res.send({ result: 'success', payload: users })
  } catch (error) {
    console.log('error: ' + error)
  }
})

router.post('/', async (req, res) => {
  let { name, category, price, stock, image } = req.body
  if (!name || !category || !price || !stock || !image) return res.send({ status: 'error', error: 'Incomplete values' })
  let result = await productsModel.create({
    name,
    category,
    price,
    stock,
    image
  })
  res.send({ status: 'success', payload: result })
})

router.put('/:uid', async (req, res) => {
  const { uid } = req.params
  let { stock } = req.body
  if (!stock) return res.send({ status: 'error', error: 'Incomplete values' })

  let result = await productsModel.updateOne({ _id: uid }, { stock })
  res.send({ status: 'success', payload: result })
})

router.delete('/:uid', async (req, res) => {
  const { uid } = req.params
  let result = await productsModel.deleteOne({ _id: uid })
  res.send({ status: 'success', payload: result })
})

export default router
