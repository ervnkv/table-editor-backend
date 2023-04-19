### Бекэнд приложения table-editor | Приложение редактирования списка сотрудников и их образования
    Демо - http://993451-ce45547.tmweb.ru:3000/
    Стэк - Typescript, Node.js, Express
    База данных - PostreSQL

#### Настройка и запуск
    Скопировать репозиторий через git clone
    Описание таблиц в database/tables.sql
    Добавить в корень проекта .env с параметрами
      DB_USER= пользователь PostreSQL | string
      DB_PASSWORD= пароль PostreSQL | string
      DB_HOST= url PostreSQL | string
      DB_PORT= порт PostreSQL | number
      DB_NAME= название БД PostreSQL | string
      SERVER_PORT= порт сервера | number
    npm i, npm run build, node dist/index.js
