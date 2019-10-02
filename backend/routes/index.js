module.exports = (router) => {
  router.prefix('/v1')
  router.use('/reciever_user', require('./reciever_user'))
  router.use('/newLink', require('./newLink'))
}
