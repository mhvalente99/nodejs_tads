const express = require('express')

const server = express();

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
    console.log('Para encerrar a aplicação: CTRL + C')
})