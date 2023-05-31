export interface UseCases<TInpout, TOutput>{
    execude (payload?: TInpout):Promise<TOutput>
}