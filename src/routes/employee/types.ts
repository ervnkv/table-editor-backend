import { Request, Response } from "express";


// Сущность таблицы employee
export type Employee = {
    id: number,
    name: string,
    degree_id: number
}

/** GET-запрос, json в виде [ {"id": "1", "name": "Сотрудник 1", "degree_id": 1} ] */
export type GetResponse = Response<Employee[]>;

/** POST-запрос, в теле json в виде {"name": "Сотрудник 2", "degree_id": 1} */
export type PostRequest = Request<{},{},Pick<Employee, "name" | "degree_id">>;
/** POST-ответ, json в виде {"name": "Сотрудник 2", "degree_id": 1} */
export type PostResponse = Response<Employee>;

/** PUT-запрос, в теле json в виде {"id": "1", "name": "Сотрудник 2", "degree_id": 2} */
export type PutRequest = Request<{},{},Employee>;
/** PUT-ответ, json в виде {"id": "1", "name": "Сотрудник 2", "degree_id": 2} */
export type PutResponse = Response<Employee>;


/** DELETE-запрос, в теле json в виде [1, 2] */
export type DeleteRequest = Request<{},{},number[]>;
/** DELETE-ответ, json в виде [1, 2] */
export type DeleteResponse = Response<number[]>;