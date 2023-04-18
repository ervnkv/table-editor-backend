import express from 'express';
import database from '../../database';
import { GetResponse, PostRequest, PostResponse, PutRequest, PutResponse, DeleteRequest, DeleteResponse } from './types';

export const employeeRouter = () => {
    const router = express.Router();
    // Запросы к таблице сотрудников "employee". Адрес - "/employee"

    // Получить все уровни образования. GET-запрос
    router.get('/', async (req, res: GetResponse) => {
        const employees = await database.query(`SELECT * FROM employee ORDER BY id`);
        res.json(employees.rows);
    });
    // Добавить сотрудника. POST-запрос, в теле json в виде {"name": "Сотрудник 1", "degree_id": "1"}
    router.post('/', async (req: PostRequest, res: PostResponse) => {
        const {name, degree_id} = req.body;
        const newEmployee = await database.query(`INSERT INTO employee (name, degree_id) values ($1, $2) RETURNING *`, [name, degree_id]);
        res.json(newEmployee.rows[0]);
    });
    // Изменить сотрудника. POST-запрос, в теле json в виде {"id": "1", "name": "Сотрудник 1", "degree_id": "1"}
    router.put('/', async (req: PutRequest, res: PutResponse) => {
        const {id, name, degree_id} = req.body;
        const newEmployee = await database.query(`UPDATE employee set name = $1, degree_id = $2 where id = $3 RETURNING *`, [name, degree_id, id]);
        res.json(newEmployee.rows[0]);
    });
    // Удалить сотрудников. DELETE-запрос, в теле json в виде "ids": "[1,2]"
    router.delete('/', async (req: DeleteRequest, res: DeleteResponse) => {
        const ids = (req.body)
        await database.query(`DELETE FROM employee WHERE id IN (${ids.join()});`)
        res.json(ids);
    });

    return router;
}
