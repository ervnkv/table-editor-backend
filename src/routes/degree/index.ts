import express from 'express';
import database from '../../database';

export const degreeRouter = () => {
    const router = express.Router();
    // Запросы к таблице уровней образования "degree". Адрес - "/degree"
    
    // Получить все уровни образования. GET-запрос
    router.get('/', async (req, res) => {
        const degrees = await database.query(`SELECT * FROM degree ORDER BY id`);
        res.json(degrees.rows);
    });
    // Добавить уровень образования. POST-запрос, в теле json в виде "name": "Бакалавриат"
    router.post('/', async (req, res) => {
        const {name} = req.body;
        const newDegree = await database.query(`INSERT INTO degree (name) values ($1) RETURNING *`, [name]);
        res.json(newDegree.rows[0]);
    });
    // Изменить уровень образования. POST-запрос, в теле json в виде {"id": "1", "name": "Бакалавриат"}
    router.put('/', async (req, res) => {
        const {id, name} = req.body;
        const newDegree = await database.query(`UPDATE degree set name = $1 where id = $2 RETURNING *`, [name, id]);
        res.json(newDegree.rows[0]);
    });
    // Удалить уровни образования. DELETE-запрос, в теле json в виде "ids": "[1,2]"
    router.delete('/', async (req, res) => {
        const ids = (req.body);
        await database.query(`DELETE FROM degree WHERE id IN (${ids.join()});`);
        res.json(ids);
    });

    return router;
}
