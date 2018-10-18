const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {    
    res.writeHeader(200, {"Content-Type" : "text/html; charset=utf-8"})
    
    const responses = []
    responses['/'] = '<h1>Home</h1>' 
    responses['/local'] = '<h1>Local</h1>'
    responses['/contato'] = '<h1>Contato</h1>'
    responses['/naoExiste'] = '<h1>URL sem resposta definida'
    
    res.end(responses[req.url] || responses['/naoExiste'])
    // if (req.url == '/') {
    //     res.end('<h1>Home</h1>')
    // } else if (req.url == '/local') {
    //     res.end('<h1>Local</h1>')
    // } else if (req.url == '/contato') {
    //     res.end('<h1>Contato</h1>')
    // }
    // res.end('URL sem resposta definida')
})

server.listen(port, ip , () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para parar a aplicação: CTRL + C')  
})