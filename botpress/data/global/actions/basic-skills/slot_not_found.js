//CHECKSUM:1794b1876a8d5de57a27e9b941e8d4282a6315a1d16b1f36b587ecaa42d62dc0
const hardLimit = 10

/**
 * Increment the "slot not found" counter.
 * When the counter reach its limit, the "notExtracted" flag is set and will make trigger the "On not found" transition.
 * @hidden true
 * @param retryAttempts The maximum number of times a slot extraction gets retried
 */
const slotNotFound = async retryAttempts => {
  if (!session.slots.notFound) {
    session.slots.notFound = 1
  }

  if (session.slots.notFound < Math.min(Number(retryAttempts), hardLimit)) {
    session.slots.notFound++
  } else {
    temp.notExtracted = 'true'
  }
}

return slotNotFound(args.retryAttempts)
