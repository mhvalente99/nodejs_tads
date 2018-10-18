const express = require('express')
const bodyParser = require('body-parser')

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.send('<h1>Home</h1>')
})
server.get('/contato', (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <form action="/contato" method="POST">
            <label>E_Mail</label>
            <input type="email" name="email" id="email">
            <label>Mensagem</label>
            <textarea name="mensagem" id="mensagem"></textarea>
            <input type="submit" value="Enviar">
        </form> 
    `)
})

server.post('/contato', (req,res) => {
    res.send({
        'E_Mail':req.body.email,
        'Mensagem':req.body.mensagem
    })
})

server.get('/pessoa', (req,res) => {
    res.send(`
        <form action="/pessoa" method="POST">
            <h1>Pessoa</h1>
            <label>Nome</label>
            <textarea name="nome" id="nome"></textarea>
            <label>E-Mail</label>
            <input type="email" name="email" id="email">
            <label>Telefone</label>
            <textarea name="numero" id="numero"></textarea>
            <input type="submit" value="Enviar">    
        </form>
    `)
    server.post('/pessoa', (req,res) => {
        res.send(
            `<h1>Pessoa ${req.body.nome} Casastrada com sucesso</h1>`
        )
    })
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
    console.log('Para encerrar a aplicação: CTRL+C')
})