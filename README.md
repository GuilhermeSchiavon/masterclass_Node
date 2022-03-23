# masterclass_Node

Comandos para rodar a Aplicação
   npm start
      http://localhost:5000/index.html


   npm run api
      http://localhost:3000
      http://localhost:3000/?name=Google&url=https://google.com

########################################

Proxima aplicação (Video minuto 1:26:00)


Chamada da API
   fetch("http://localhost:3000/").then((data) => data.json()).then((data) => console.log(data))

Retorno da API:
   {urls: Array(3)}
      urls: Array(3)
         0: {nome: 'Guilherme', url: 'http://rocketseat.com.br'}
         1: {nome: 'GoogleBR', url: 'https://google.com.br'}
         2: {name: 'Google', url: 'https://google.com'}
