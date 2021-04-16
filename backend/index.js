
const { init, clone, free, applyChanges, applyLocalChange, save, load, loadChanges, getPatch, getHeads, getAllChanges, getChanges, getChangeByHash, getMissingDeps } = require("./backend")
const { receiveSyncMessage, generateSyncMessage } = require('./protocol')
const { encodeSyncMessage, decodeSyncMessage, encodePeerState, decodePeerState, makeBloomFilter, getChangesToSend } = require('./sync')

module.exports = {
  init, clone, free, applyChanges, applyLocalChange, save, load, loadChanges, getPatch,
  getHeads, getAllChanges, getChanges, getChangeByHash, getMissingDeps,
  receiveSyncMessage, generateSyncMessage, encodeSyncMessage, decodeSyncMessage, encodePeerState, decodePeerState
}

