const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const server = express()
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/', (req, res) => {
    res.send('servidor funcionando')
})

server.use('/', router)

router.get('/pessoa/:id?', (req, res) => {
    let filter = ''

    if (req.params.id) {
        filter = ' WHERE id = ' + parseInt(req.params.id)         
    }
    execSQLQuery('SELECT * FROM pessoa' + filter, res)
})

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
    console.log('Para encerrar a aplicação CTRL+C')
})

function execSQLQuery(sqlQry, res) {
    const conn = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'exercicio03'
    })

    conn.query(sqlQry, (error, results, fields) => {
        if (error) res.json(error)
        else {
            res.json(results)
            conn.end()
        }
    })
}