const express = require('express');
const app = express();
const port = 8033;
app.use(express.static('dist'));
app.listen(port, () => console.log(`Server Start at ${port}`));
