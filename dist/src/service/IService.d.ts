export interface IService<O> {
    findAll(): any;
    save(data: O): any;
    update(id: number, data: O): any;
    findById(id: number): any;
    delete(id: number): any;
}
