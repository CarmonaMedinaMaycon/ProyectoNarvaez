import { CustomResponse } from "@/kernel/types";
import { AllPersonDTO } from "../../entities/AllpeopleDTO";

export interface Repository{
    getAllPeople(page:number):Promise<CustomResponse<AllPersonDTO>>
}