import express from 'express';
import cors from 'cors';
import database from './database.js';

const PORT = process.env.SERVER_PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

// Запросы к таблице уровней образования "degree". Адрес - "/degree"

// Получить все уровни образования. GET-запрос
app.get('/degree', async (req, res) => {
    const degrees = await database.query(`SELECT * FROM degree ORDER BY id`);
    res.json(degrees.rows);
});
// Добавить уровень образования. POST-запрос, в теле json в виде "name": "Бакалавриат"
app.post('/degree', async (req, res) => {
    const {name} = req.body;
    const newDegree = await database.query(`INSERT INTO degree (name) values ($1) RETURNING *`, [name]);
    res.json(newDegree.rows[0]);
});
// Изменить уровень образования. POST-запрос, в теле json в виде {"id": "1", "name": "Бакалавриат"}
app.put('/degree', async (req, res) => {
    const {id, name} = req.body;
    const newDegree = await database.query(`UPDATE degree set name = $1 where id = $2 RETURNING *`, [name, id]);
    res.json(newDegree.rows[0]);
});
// Удалить уровни образования. DELETE-запрос, в теле json в виде "ids": "[1,2]"
app.delete('/degree', async (req, res) => {
    const ids = (req.body);
    await database.query(`DELETE FROM degree WHERE id IN (${ids.join()});`);
    res.json(ids);
});



// Запросы к таблице сотрудников "employee". Адрес - "/employee"

// Получить все уровни образования. GET-запрос
app.get('/employee', async (req, res) => {
    const employees = await database.query(`SELECT * FROM employee ORDER BY id`);
    res.json(employees.rows);
});
// Добавить сотрудника. POST-запрос, в теле json в виде {"name": "Сотрудник 1", "degree_id": "1"}
app.post('/employee', async (req, res) => {
    const {name, degree_id} = req.body;
    const newEmployee = await database.query(`INSERT INTO employee (name, degree_id) values ($1, $2) RETURNING *`, [name, degree_id]);
    res.json(newEmployee.rows[0]);
});
// Изменить сотрудника. POST-запрос, в теле json в виде {"id": "1", "name": "Сотрудник 1", "degree_id": "1"}
app.put('/employee', async (req, res) => {
    const {id, name, degree_id} = req.body;
    const newEmployee = await database.query(`UPDATE employee set name = $1, degree_id = $2 where id = $3 RETURNING *`, [name, degree_id, id]);
    res.json(newEmployee.rows[0]);
});
// Удалить сотрудников. DELETE-запрос, в теле json в виде "ids": "[1,2]"
app.delete('/employee', async (req, res) => {
    const ids = (req.body)
    await database.query(`DELETE FROM employee WHERE id IN (${ids.join()});`)
    res.json(ids);
});

app.listen(PORT, () => console.log(`Server run on PORT ${PORT}`))



