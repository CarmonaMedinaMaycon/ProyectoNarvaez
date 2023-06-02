import { CustomResponse } from "@/kernel/types";
import { GetAllPeopleIteractor } from "../use-cases/get-all-people.iterator";
import { Repository } from "../use-cases/ports/people.repository";
import { PeopleStorageGateway } from "./people-storage.gateway";
import { Person } from "../entities/person";
import { AllPersonDTO } from "../entities/AllpeopleDTO";
import { InsertPersonIterator } from "../use-cases/insert-person.iterator";

export class PeopleController{
    findAllPeople(page:number){
        const repository:Repository = new PeopleStorageGateway();
        const interator:GetAllPeopleIteractor = new GetAllPeopleIteractor(repository);

        try {
            return interator.execude(page)
        } catch (error) {
            return {
                status:500,
                message:"AAAAAAA",
            } as CustomResponse<AllPersonDTO>
        }
    }
    savePerson(person:Person){
        const repository: Repository= new PeopleStorageGateway();
        const interator:InsertPersonIterator = new InsertPersonIterator(repository);
        try {
           return interator.execude(person)
        } catch (error) {
            return {
                status:500,
                message:"no jalo"
            }as CustomResponse<Person>
        }
    }
}