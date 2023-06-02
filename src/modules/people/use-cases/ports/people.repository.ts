import { CustomResponse } from "@/kernel/types";
import { AllPersonDTO } from "../../entities/AllpeopleDTO";
import { Person } from "../../entities/person";

export interface Repository{
    getAllPeople(page:number):Promise<CustomResponse<AllPersonDTO>>
    insertPerson(person:Person):Promise<CustomResponse<Person>>
}