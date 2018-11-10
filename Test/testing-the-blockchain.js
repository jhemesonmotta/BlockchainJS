const Blockchain = require('../Classes/blockchain')
const blockchainInstance = new Blockchain()

const BlockchainIntegrity = require('../Security/blockchain-integrity')
const blockchainIntegrityInstance = new BlockchainIntegrity()

blockchainInstance.addBlock({ amount: 4 })
blockchainInstance.addBlock({ amount: 50 })
blockchainInstance.addBlock({ amount: 750 })
blockchainInstance.addBlock({ amount: 25 })
blockchainInstance.addBlock({ amount: 30 })
blockchainInstance.addBlock({ amount: 90 })
blockchainInstance.addBlock({ amount: 99 })

console.log(blockchainInstance.getLastBlock())

console.log(
    blockchainIntegrityInstance.isValid(
        blockchainInstance.blocks
    )
) // true

blockchainInstance.blocks[7].data.amount = 30000 // ataque malicioso

console.log(
    blockchainIntegrityInstance.isValid(
        blockchainInstance.blocks
    )
) // false


// npm install -g documentation