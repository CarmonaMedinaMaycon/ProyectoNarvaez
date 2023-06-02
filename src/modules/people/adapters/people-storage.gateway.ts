import { CustomResponse } from "@/kernel/types";
import { AllPersonDTO } from "../entities/AllpeopleDTO";
import { Repository } from "../use-cases/ports/people.repository";
import api from '@/config/http-client.gateway';
import { Person } from "../entities/person";

export class PeopleStorageGateway implements Repository{
    async insertPerson(person: Person): Promise<CustomResponse<Person>> {
        const resp = await api.doPost(`/api/users`, person)
        return {
            status:resp.status,
            entity:resp.data,
            result:true
        } as CustomResponse<Person>
    }
    async getAllPeople(page: number): Promise<CustomResponse<AllPersonDTO>> {
        const resp =await api.doGet(`/api/users?page=${page}`);
        return {
            status:resp.status,
            entity: resp.data
        }as CustomResponse<AllPersonDTO>

    }

}