//CHECKSUM:53c4aa6015b197bc8ada9138d2034041a5f1d2886ed36e2569a9b19b0ee17fb7
/**
 * Resets the NLU context to the default scope.
 *
 * This method is contextual to the current user and chat session.
 *
 * @title Reset Context
 * @category NLU
 * @author Botpress, Inc.
 */
const resetContext = () => {
  event.state.session.nluContexts = []
}

return resetContext()
