export interface IService<O> {
    findAll();

    save(data: O);

    update(id: number, data: O);

    findById(id: number);

    delete(id: number);
}
