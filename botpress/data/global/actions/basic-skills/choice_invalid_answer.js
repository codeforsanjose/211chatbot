//CHECKSUM:7043fb9bee91065c1e4fff97c71bda251f77976a18916dc7098905baa50d01b1
/**
 * @hidden true
 */

const key = args.randomId ? `skill-choice-invalid-count-${args.randomId}` : `skill-choice-invalid-count`
const value = (temp[key] || 0) + 1
temp[key] = value
