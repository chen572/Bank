const express = require('express')
const Transaction = require('../models/transaction')
const router = express.Router()

router.get('/transactions', async (req, res) => {
  res.send(await Transaction.find({}))
})

router.post('/transaction', async (req, res) => {
  const { transaction } = req.body
  const transactionToSave = new Transaction(transaction)
  res.send(await transactionToSave.save())
})

router.delete('/transaction', async (req, res) => {
  const { transactionID } = req.body
  res.send(await Transaction.findByIdAndDelete(transactionID))
})

module.exports = router