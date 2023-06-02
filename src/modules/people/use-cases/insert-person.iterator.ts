import { UseCases } from "@/kernel/contracts";
import { CustomResponse } from "@/kernel/types";
import { Person } from "../entities/person";
import { Repository } from "./ports/people.repository";

export class InsertPersonIterator implements UseCases<Person, CustomResponse<Person>>{
    constructor(private readonly peopleRepository:Repository){}
    execude(person: Person): Promise<CustomResponse<Person>> {
        return this.peopleRepository.insertPerson(person)
    }
    
}