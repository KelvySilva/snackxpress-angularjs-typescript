import { IHttpResponse, IHttpPromise } from "angular";

interface IService<T> {

    listAll() : IHttpPromise<T[]>;

    findOne(id:number) : IHttpPromise<T>;
    
    saveOne(t:T) : IHttpPromise<T>;

    updateOne(id:number, t:T) : IHttpPromise<T>;

    deleteOne(id:number) : IHttpPromise<void>; 

}
export default IService;