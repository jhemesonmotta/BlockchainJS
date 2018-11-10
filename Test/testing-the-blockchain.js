const Blockchain = require('../Classes/blockchain')
const blockchainInstance = new Blockchain()

const BlockchainIntegrity = require('../Security/blockchain-integrity')
const blockchainIntegrityInstance = new BlockchainIntegrity()

blockchainInstance.addBlock({ amount: 4 })
blockchainInstance.addBlock({ amount: 50 })

console.log(
    blockchainIntegrityInstance.isValid(
        blockchainInstance.blocks
    )
) // true
blockchain.blocks[1].data.amount = 30000 // ataque malicioso
console.log(
    blockchainIntegrityInstance.isValid(
        blockchainInstance.blocks
    )
) // false