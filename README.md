1. Получаем и выводим весь список контактов в виде таблицы (console.table).
node index.js --action list
![list](./img/1.png)
2. Получаем контакт по id.
node index.js --action get --id 5
![list](./img/2.png)
3. Добавялем контакт.
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
![list](./img/3.png)
4. Удаляем контакт.
node index.js --action remove --id 3
![list](./img/4.png)