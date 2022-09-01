import { User } from "./Modules/User";
//import { $ } from "./Modules/functions";
import * as env from "./Modules/const";

class SuperUser extends User {
//faccio quello che mi pare
}

let user = new SuperUser('Mario','Super');
 
//let elemento = $('.classe')

console.log(env)
console.log(env.API_USER)

