const express = require('express');
const app = express()
const dbsequlize = require('./db/sequelize')
const db = require('./db');
const userRouter = require('./routes/userRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res)=>{
res.send({data:'Hello Swarup'});
})
app.use(userRouter)


const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listing on port ${port}..`))

