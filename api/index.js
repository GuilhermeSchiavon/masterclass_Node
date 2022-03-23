const http = require('http')
const URL = require('url') /* Responsavel por pegar os GET  */
const fs = require('fs')
const path = require('path')

const data = require('./urls.json')


function writeFile(cb) {
   fs.writeFile(     /* Caso não tivessemos este return a aplicação faria uma espécie de mensageria, ira mandar fazer e continuar a aplicação, mas com o return ele deve aguardar a resposta dessa edição  */
   path.join(__dirname, "urls.json"),
   JSON.stringify(data, null, 2),
   err => {
      if(err) throw err

      cb(JSON.stringify({message: "OK"}))
   }
)
}

http.createServer((req, res) => {
   const { name, url, del } = URL.parse(req.url, true).query

   res.writeHead(200, {
      'Access-Control-Allow-Origin': '*'
   })
   //All recurces
   if(!name || !url)
      return res.end(JSON.stringify(data))

   if(del){
      data.urls = data.urls.filter(item => String(item.url) !== String(url))
         /* Função filter deixa tudo que for verdadeiro, o q for falso ele tira
         | Por este motivo: 'google != google  ?'  = falso  então tira
         | Filtando, remotendo os dados falsos e gerando um novo array sem os dados negativos

         | Agora preciso atualizar o conteudo do meu arquivo então
         | Devido a isto é necessario importar a biblioteca 'fs'
         */
         return writeFile((message) => res.end(message))  /* chamando a função achima recebendo parametros */
   }

   data.urls.push({name, url})

   return writeFile((message) => res.end(message))
}).listen(3000, () => console.log('API is running'))
