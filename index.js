import App from './src/server.js'

const day = new Date().toLocaleDateString()
const port = 2020 || process.env.PORT
App.listen(port, () => console.log(`Servidor ativo na porta ${port}, ${day} `))
