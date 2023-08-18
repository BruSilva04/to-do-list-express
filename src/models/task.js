// import do mongoose
const mongoose = require('mongoose')

const Taskchema = mongoose.Schema({
  name: {type: String, required: true},
  done: {type: Boolean, default: false},
  checlist:{//adionando referencia
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true
  }
})

module.exports = mongoose.model('Task', Taskchema)