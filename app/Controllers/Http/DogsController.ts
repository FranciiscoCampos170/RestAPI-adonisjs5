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
}
