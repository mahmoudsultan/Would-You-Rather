const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('The Action: ', action)
  next(action)
  console.log('New State: ', store.getState())
  console.groupEnd()
}

export default logger
