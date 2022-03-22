setInterval(() => {
    const os = require('os')
    const log = require('./logger')

    const { freemem, totalmem } = os

    const total = parseInt(totalmem() / 1024 / 1024)
    const mem = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((mem / total) * 100)

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents} %`
    }

    console.clear()
    console.log("______ PC STATUS _____ ")
    console.table(stats)

    /* log("Rodando") */ /* Forma simples de chamar a função do outro arquivo exportado */
    log(`${JSON.stringify(stats)}\n`)
}, 1000);


/* console.log(`${mem} MB`, `${total} MB`, `${percents} %`) */

/* console.log(`${parseInt(freemem() / 1024 / 1024)} MB`, `${parseInt(totalmem() / 1024 / 1024)} MB`) */

/* console.log(os) */

/* console.log(os.platform()) */