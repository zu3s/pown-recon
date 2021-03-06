const { Recon } = require('../../../recon')

const recon = new Recon()

recon.on('info', console.info.bind(console))
recon.on('warn', console.warn.bind(console))
recon.on('error', console.error.bind(console))

module.exports = { recon }
