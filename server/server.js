
const app = require(`${__dirname}/app`),
port = app.get('port'),
http = require('http').createServer(app)

http
    .listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
    })

module.exports = http