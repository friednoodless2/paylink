const Reciever_user = require('../models/reciever_user')

async function findAll (ctx) {
    const reciever_user = await Reciever_user.find({})
    ctx.body = reciever_user
}

async function create (ctx) { 
    const newReciever_user = new Reciever_user(ctx.request.body)
    const savedReciever_user = await newReciever_user.save()
    ctx.body = savedReciever_user
}

async function destroy (ctx) { 
    const id= ctx.params.id
    const reciever_user = await Reciever_user.findById(id)

    const deletedreciever_user = await reciever_user.remove()
    ctx.body = deletedreciever_user
}

async function update (ctx) {
    const id = ctx.params.id
    const reciever_user = await Reciever_user.findById(id)
    reciever_user.done = !reciever_user.done

    const updatedreciever_user = await reciever_user.save()
    ctx.body = updatedreciever_user
}

module.exports = {
    findAll,
    create,
    destroy,
    update
}