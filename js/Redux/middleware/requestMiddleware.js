export default store => next => action => {
  const {promise, types, ...rest} = action
  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILED] = types
  next({...rest, type: REQUEST})

  return promise.then(responseData => {
    next({
      ...rest,
      type: SUCCESS,
      data: responseData
    })
  })
  .catch(error => next({
    ...rest,
    type: FAILED,
    error
  }))
}
