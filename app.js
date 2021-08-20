const express = require('express');
const app = express();
const port = 5000;

app.use("/users/", require("./routes/usersRoute"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
