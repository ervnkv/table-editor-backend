import express from 'express';
import database from '../../database';
import { GetResponse, PostRequest, PostResponse, PutRequest, PutResponse, DeleteRequest, DeleteResponse } from './types';

export const employeeRouter = () => {
    const router = express.Router();

    // Получить все уровни образования
    router.get('/', async (req, res: GetResponse) => {
        try {
            const employees = await database.query(`SELECT * FROM employee ORDER BY id`);
            res.json(employees.rows);
        } catch (error) {
            res.sendStatus(500);
        }
    });
    // Добавить сотрудника
    router.post('/', async (req: PostRequest, res: PostResponse) => {
        try {
            const {name, degree_id} = req.body;
            const newEmployee = await database.query(`INSERT INTO employee (name, degree_id) values ($1, $2) RETURNING *`, [name, degree_id]);
            res.json(newEmployee.rows[0]);
        } catch (error) {
            res.sendStatus(500);
        }
    });
    // Изменить сотрудника
    router.put('/', async (req: PutRequest, res: PutResponse) => {
        try {
            const {id, name, degree_id} = req.body;
            const newEmployee = await database.query(`UPDATE employee set name = $1, degree_id = $2 where id = $3 RETURNING *`, [name, degree_id, id]);
            res.json(newEmployee.rows[0]);
        } catch (error) {
            res.sendStatus(500);
        }
    });
    // Удалить сотрудников
    router.delete('/', async (req: DeleteRequest, res: DeleteResponse) => {
        try {
            const ids = (req.body)
            await database.query(`DELETE FROM employee WHERE id IN (${ids.join()});`)
            res.json(ids);
        } catch (error) {
            res.sendStatus(500);
        }
    });

    return router;
}
