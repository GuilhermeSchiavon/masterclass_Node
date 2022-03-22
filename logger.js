/* Dentro do Node.js
Execut o comando -> events

Resultado :
<ref *1> [Function: EventEmitter] {
  once: [AsyncFunction: once],
  on: [Function: on],
  getEventListeners: [Function: getEventListeners],
  EventEmitter: [Circular *1],
  usingDomains: true,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  EventEmitterAsyncResource: [Getter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  setMaxListeners: [Function (anonymous)],
  init: [Function (anonymous)],
  listenerCount: [Function (anonymous)]
}> */

const EventEmitter = require('events')
const fs = require('fs')    /* Para trabalhar com os arquivos do Sistema [ Caso queira ver mais opções, basta fazer o mesmo processo acima as colocar 'fs' ]*/
const path = require('path')    /* Para evitar erros ao colocar esta aplicação em outras maquinas e neste exemplo encontar o log.txt */

const emitter = new EventEmitter()

/* emitter.on('hi', () => console.log("Devo dizer oi")) */          /* Se fosse apenas uma linha de resposta não precisaria abrir {} */
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
    /* console.log(message) */
})

function log(message) {
    emitter.emit('log', message)
}

/* log("Passando essa msg") */  /* Posso chamar essa function log dessa forma passando a messagem que quero a ela */

module.exports = log    /* Exportando a função */