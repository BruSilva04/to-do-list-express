// import da mongoose
const mongoose = require('mongoose')
// passando a promisse do nodejs
mongoose.Promise = global.Promise

// conectar o bd com o projeto padrão
mongoose.connect('mongodb://127.0.0.1:27017/todo-list', { useNewUrlParser: true, useUnifiedTopology: true})
// se der certo
  .then(() => console.log('Conectado ao MongoDB'))
  // se der errado
  .catch((err) => console.log(err))



