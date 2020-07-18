// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DogsController {
    public async index(){
        return {
            'name': 'Max',
            'breed': 'poodle',
            'description': 'love everthing'
        }
    }
}
