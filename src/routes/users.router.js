import { Router } from 'express'
import { userModel } from '../models/users.model.js'

const router = Router()

router.get('/', async (req, res) => {
  try {
    let users = await userModel.find()
    res.send({ result: 'success', payload: users })
  } catch (error) {
    console.log('error: ' + error)
  }
})

router.post('/', async (req, res) => {
  let { name, email } = req.body
  if (!name || !email) return res.send({ status: 'error', error: 'Incomplete values' })
  let result = await userModel.create({
    name,
    email
  })
  res.send({ status: 'success', payload: result })
})

router.put('/:uid', async (req, res) => {
  const { uid } = req.params
  let { name, email } = req.body
  if (!name || !email) return res.send({ status: 'error', error: 'Incomplete values' })

  let result = await userModel.updateOne({ _id: uid }, { name, email })
  res.send({ status: 'success', payload: result })
})

router.delete('/:uid', async (req, res) => {
  const { uid } = req.params
  let result = await userModel.deleteOne({ _id: uid })
  res.send({ status: 'success', payload: result })
})

export default router
