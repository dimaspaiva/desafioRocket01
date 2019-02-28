const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

app.set('view engine', 'njk')
app.use(express.static('public'))

nunjucks.configure('views', {
  // Inicia o live reaload
  watch: true,
  // Informa o servidor utilizado
  express: app,
  // Alterar nome de arquivos
  autoescape: true
})

const checkIdade = (req, res, nex) => {
  const idade = parseInt(req.query.idade)
  if (isNaN(idade)) {
    return res.redirect('/')
  }

  req.idade = idade

  nex()
}

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/maioridade', (req, res) => {
  res.render('maioridade')
})

app.get('/menoridade', (req, res) => {
  res.render('menoridade')
})

app.get('/check', checkIdade, (req, res) => {
  if (req.idade < 18) {
    res.redirect('/menoridade')
  } else {
    res.redirect('/maioridade')
  }
})

app.listen(3000, () => {
  console.log('Server running')
})
