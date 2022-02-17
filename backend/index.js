const express = require('express');
const cors = require('cors');
const router = require('./routes/routes');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(router.teste)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

