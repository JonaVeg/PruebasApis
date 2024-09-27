const express = require('express');
const app = express();

// Railway asigna dinámicamente un puerto, usa process.env.PORT
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`API running on port ${port}`);
});
