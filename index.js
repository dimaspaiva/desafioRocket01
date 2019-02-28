const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set('view engine', 'njk')

nunjucks.configure('views', {
  // Inicia o live reaload
  watch: true,
  // Informa o servidor utilizado
  express: app,
  // Alterar nome de arquivos
  autoescape: true
})

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/maioridade', (req, res) => {
  res.render('maioridade')
})

app.get('/menoridade', (req, res) => {
  res.render('menoridade')
})

app.listen(3000, () => {
  console.log('Server running')
})
