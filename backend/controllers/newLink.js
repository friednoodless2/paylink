const NewLink = require('../models/newlink')

async function findAll (ctx) {
    const newLink = await NewLink.find({})
    ctx.body = newLink
}

async function create (ctx) { 
    const newLink = new NewLink(ctx.request.body)
    const savedLink = await newLink.save()
    ctx.body = savedLink
}

async function destroy (ctx) { 
    const id= ctx.params.id
    const newLink = await NewLink.findById(id)

    const deletednewLink = await newLink.remove()
    ctx.body = deletednewLink
}

async function update (ctx) {
    const id = ctx.params.id
    const newLink = await NewLink.findById(id)
    newLink.done = !newLink.done

    const updatednewLink = await newLink.save()
    ctx.body = updatednewLink
}

module.exports = {
    findAll,
    create,
    destroy,
    update
}