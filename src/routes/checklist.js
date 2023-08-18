const express = require('express')

const router = express.Router()

// importando 
const Checklist = require('../models/checklist')

// pegar
router.get('/', async (req, res) => {
  try {
    let checklist = await Checklist.find({})//fazendo uma busca sem nada especifico com find
    res.status(200).json(checklist)
  } catch (error) {
    res.status(500).json(error)
  }
})

// cadastrar 
router.post('/', async (req, res) => {
  let {name} = req.body
  console.log(name)
  try {
    let checklists = await Checklist.create({name})//criando dados com create 
    res.status(200).json(checklists)
  } catch (error) {
    res.status(422).json(error)
  }     
  
})

// pegar com id
router.get('/:id', async(req, res) => {
  try {
    let checklists = await Checklist.findById(req.params.id)//fazendo uma busca especifica com id com params id
    res.status(200).json(checklists)
  } catch (error) {
    res.status(422).json(error)
  }
})

// listar com id 
router.put('/:id', async (req, res) => {
  try {
    let {name} = req.body
    let checklists = await Checklist.findByIdAndUpdate(req.params.id, {name}, {new: true})
    res.status(200).json(checklists)
  } catch (error) {
    res.status(422).json(error)
  }
})

// excluir 
router.delete('/:id', async (req, res) => {
  try {
    let checklists = await Checklist.findByIdAndRemove(req.params.id,)
    res.status(200).json(checklists)
  } catch (error) {
    res.status(422).json(error)
    
  }
})

module.exports = router