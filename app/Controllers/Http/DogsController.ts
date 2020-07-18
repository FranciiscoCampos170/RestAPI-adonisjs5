// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Dog from "App/Models/Dog";

export default class DogsController {
    public async index(){
        const dogs = await Dog.all()
        return dogs
    }
    
}
