import express from 'express';
import database from '../../database';
import { GetResponse, PostRequest, PostResponse, PutRequest, PutResponse, DeleteRequest, DeleteResponse } from './types';

export const degreeRouter = () => {
    const router = express.Router();
    
    // Получить все уровни образования. GET-запрос
    router.get('/', async (req, res:GetResponse) => {
        try {
            
        } catch (error) {
            res.sendStatus(500);
        }
        const degrees = await database.query(`SELECT * FROM degree ORDER BY id`);
        res.json(degrees.rows);
    });

    // Добавить уровень образования
    router.post('/', async (req: PostRequest, res: PostResponse) => {
        try {
            
        } catch (error) {
            res.sendStatus(500);
        }
        const {name} = req.body;
        const newDegree = await database.query(`INSERT INTO degree (name) values ($1) RETURNING *`, [name]);
        res.json(newDegree.rows[0]);
    });

    // Изменить уровень образования
    router.put('/', async (req: PutRequest, res:PutResponse) => {
        try {
            
        } catch (error) {
            res.sendStatus(500);
        }
        const {id, name} = req.body;
        const newDegree = await database.query(`UPDATE degree set name = $1 where id = $2 RETURNING *`, [name, id]);
        res.json(newDegree.rows[0]);
    });

    // Удалить уровни образования
    router.delete('/', async (req: DeleteRequest, res: DeleteResponse) => {
        try {
            const ids = (req.body);
            await database.query(`DELETE FROM degree WHERE id IN (${ids.join()});`);
            res.json(ids); 
        } catch (error) {
            res.sendStatus(500);
        }
    });

    return router;
}