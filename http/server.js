/* > http
{
  _connectionListener: [Function: connectionListener],
  METHODS: [
    'ACL',         'BIND',       'CHECKOUT',
    'CONNECT',     'COPY',       'DELETE',
    'GET',         'HEAD',       'LINK',
    'LOCK',        'M-SEARCH',   'MERGE',
    'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
    'MOVE',        'NOTIFY',     'OPTIONS',
    'PATCH',       'POST',       'PROPFIND',
    'PROPPATCH',   'PURGE',      'PUT',
    'REBIND',      'REPORT',     'SEARCH',
    'SOURCE',      'SUBSCRIBE',  'TRACE',
    'UNBIND',      'UNLINK',     'UNLOCK',
    'UNSUBSCRIBE'
  ],
  STATUS_CODES: {
    '100': 'Continue',
    '101': 'Switching Protocols',
    ...
  },
  Agent: [Function: Agent] { defaultMaxSockets: Infinity },
  ClientRequest: [Function: ClientRequest],
  IncomingMessage: [Function: IncomingMessage],
  OutgoingMessage: [Function: OutgoingMessage],
  Server: [Function: Server],
  ServerResponse: [Function: ServerResponse],
  createServer: [Function: createServer],
  validateHeaderName: [Function: __node_internal_],
  validateHeaderValue: [Function: __node_internal_],
  get: [Function: get],
  request: [Function: request],
  maxHeaderSize: [Getter],
  globalAgent: [Getter/Setter]
}
> */
const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {               /* req é a requisição que estou pedindo para o servidor www.site/contatos,    res é a resposta do servidor */

    const file = req.url === '/' ? 'index.html' : req.url  /* verifco se a resquisição feita é igual ao Home ou '/' caso contrario pego o que foi requisitado (GET)  */
    const filePath = path.join(__dirname, 'public', file)
    const extname = path.extname(filePath)


    const allowedFileType = ['.html', '.css', '.js']
    const allowed = allowedFileType.find((item) => item == extname)

    if(!allowed) return
    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err

            res.end(content)
        }
    )

    /* console.log(file) */ /* mostra no meu terminal o valor de file, ou seja, GET ou paginas solicitadas */

    /* res.end('cheguei') */ /* Resposta que posso dar ao usuario da pagina ao assessar essas pagina */
    /* if(req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if(err) throw err

                res.end(content)
            }
        )
    }
    if(req.url === '/primeiroTeste') return res.end('<h1>Home Page</h1><a href="./contato">Ir para contatos</a>')
    if(req.url === '/contato') return res.end('<h1>Contato</h1>') */
}).listen(5000, () => console.log('Server esta rodando'))
