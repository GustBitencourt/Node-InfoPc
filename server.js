/* constatnte com os metodos http */
const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./pcRamUsage.js');

http.createServer((req, res) => {
    let url = req.url;

    //criando rota
    if(url === '/stats') {
        res.end(JSON.stringify(stats, null, 2));

    } else {
        res.end('<h1>Bem Vindo</h1>')
    }

}).listen(port, () => console.log(`Server is running on ${host}:${port}`));