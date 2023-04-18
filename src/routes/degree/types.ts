import { Request, Response } from "express";


// Сущность таблицы degree
export type Degree = {
    id: number,
    name: string
}

/** GET-запрос, json в виде [ {"id": "1", "name": "Бакалавриат"} ] */
export type GetResponse = Response<Degree[]>;

/** POST-запрос, в теле json в виде {"name": "Магистратура"} */
export type PostRequest = Request<{},{},Pick<Degree, "name">>;
/** POST-ответ, json в виде {"id": "2", "name": "Магистратура"} */
export type PostResponse = Response<Degree>;

/** PUT-запрос, в теле json в виде {"id": "1", "name": "Аспирантура"} */
export type PutRequest = Request<{},{},Degree>;
/** PUT-ответ, json в виде {"id": "1", "name": "Аспирантура"} */
export type PutResponse = Response<Degree>;

/** DELETE-запрос, в теле json в виде [1, 2] */
export type DeleteRequest = Request<{},{},number[]>;
/** DELETE-ответ, json в виде [1, 2] */
export type DeleteResponse = Response<number[]>;