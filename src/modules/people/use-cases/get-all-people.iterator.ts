import { CustomResponse } from "@/kernel/types";
import { AllPersonDTO } from "../entities/AllpeopleDTO";
import { UseCases } from "@/kernel/contracts";
import { Repository } from "./ports/people.repository";

export class GetAllPeopleIteractor implements UseCases<number,CustomResponse<AllPersonDTO>>{
    constructor(private readonly peopleRepository: Repository){}

    execude(page?: number | undefined): Promise<CustomResponse<AllPersonDTO>> {
    if(!page){
        page=1;
    }
    return this.peopleRepository.getAllPeople(page)
    }
}