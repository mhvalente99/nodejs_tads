const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
    res.writeHeader(200, {"Content-Type" : "Text/plain; charset=utf8"})
    res.end('Olá mundo')
})

server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para encerrar a aplicação: CTRL + C')
})