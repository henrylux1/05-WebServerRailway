const http = require('http');

http.createServer((req,res) => {
    res.setHeader('Content-Disposition', 'attachment;filename=lista.csv')
    res.writeHead(200, { 'Content-Type': 'aplication/csv'})
    res.write('id, nombre\n')
    res.write('1, Henry\n')
    res.write('2, Isaias\n')
    res.write('3, Lux\n')
    res.write('4, Ordoñez\n')
    res.end();


})
.listen(8080)

console.log('Escuchando el puerto ', 8080);