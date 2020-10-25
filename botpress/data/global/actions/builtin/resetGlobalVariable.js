//CHECKSUM:69d6c32f8ea039a22bee5e0649f5d7a5c46873a28995eabdfb34ed385b8dee3d
/**
 * Reset a variable globally
 * @title Reset global variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} name - The name of the variable
 */
const resetGlobalVariable = async name => {
  const key = bp.kvs.getGlobalStorageKey(name)
  await bp.kvs.removeStorageKeysStartingWith(key)
}

return resetGlobalVariable(args.name)
