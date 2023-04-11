const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
app.use(cors());
app.use(express.json());

app.get("/flight", (req, res)=>{
    const data = fs.readFileSync("db.json", "utf8")
    res.send(data)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})