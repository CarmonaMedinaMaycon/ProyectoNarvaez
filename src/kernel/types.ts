export type entity<Tidentifier extends number | string>={
    id? :Tidentifier
};
export type CustomResponse<T> ={
    status:number,
    result:boolean,
    message?:string,
    entities?: T[],
    entity?: T
}