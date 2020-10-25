//CHECKSUM:9133127da9d0346ffb67e20891289f7a111812df6fd4c2fed9c350aea3af7876
/**
 * Wait for a bit.
 *
 * @title Wait/Delay
 * @category Utility
 * @author Botpress, Inc.
 * @param {number} delay=1000 - The number of milliseconds to wait
 */
const wait = async delay => {
  return new Promise(resolve => setTimeout(() => resolve(), delay))
}

return wait(args.delay || 1000)
