 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Dog from "App/Models/Dog";

export default class DogsController {
    public async index(){
        const dogs = await Dog.all()
        return dogs
    }
    public async store({ request }: HttpContextContract){
        const data = request.all()
        const dog = await Dog.create(data)
        return dog
    }

    public async show({ params }: HttpContextContract){
        const data = await Dog.findOrFail(params.id)
        return data
    }

    public async update({ request, params }: HttpContextContract){
        const dog = await Dog.findOrFail(params.id)
        const data = request.all()
        dog.merge(data)
        await dog.save()

        return dog
    }

    public async destroy({params}){
        const dog = await Dog.findOrFail(params.id)
        await dog.delete()
    }
}
