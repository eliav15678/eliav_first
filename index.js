const express = require('express');
const bodyparser= require('body-parser');
const app = express();

app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

const actionsRoute = require('./actions');
app.use('/api',actionsRoute);

const port = 5000;
app.listen(port,function(){
    console.log(`server is working via port ${port}`);
});

