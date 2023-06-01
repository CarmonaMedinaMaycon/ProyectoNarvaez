export type entity<Tidentifier extends number | string>={
    id? :Tidentifier
};
export type CustomResponse<T> ={
    status:number,
    message?:string,
    entities?: T[],
    result?:boolean,
    entity?: T
}