const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
    user: 'user',
    host: 'localhost',
    database: 'testdb',
    password: 'password',
    port: 5432,
});

client.connect();

app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
