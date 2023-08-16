// biblioteca do express
const express = require('express')
const checkListRouter = require('./src/routes/checklist')
// chamando o app para ter disponivel todos os metodos dentro do app
const app = express()
// 'use' para usar o Middlewares
// para mandar json para ele é so usar esse Middlewares
// express.json que olha na requisição se existe um json 
// e se existir ele colocar no req body
app.use(express.json())

app.use('/checklists',checkListRouter)


// dando start passando a porta para ele ficar ouvindo 
app.listen(3000, ()=>{
 console.log('Servidor iniciado')
})

