import { PeopleDTO } from "./peopleDTO"

export type AllPersonDTO ={
    page:number,
    per_page: number,
    total:number,
    total_pages:number,
    data: Array<PeopleDTO>
}