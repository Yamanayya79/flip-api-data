let express = require('express')
let cors=require('cors')
let app = express();
app.use(cors())
let fs = require('fs')
let dotenv=require('dotenv')
dotenv.config()
let port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    fs.readFileSync('readme.md', 'utf-8', (err, result) => {
        res.send(result)
})
})

// =1=======location========
app.get('/location', (req, res) => {
    fs.readFileSync('location.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//==2=======Grocery=========
app.get('/grocery', (req, res) => {
    fs.readFileSync('grocery.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//====3====Electronics product=========

app.get('/Electronics', (req, res) => {
    fs.readFileSync('Electronics.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//===4====Furniture.& more=======
app.get('/Furniture', (req, res) => {
    fs.readFileSync('Furniture.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})

//=5==Winter EssentialsWinter Essentials======
app.get('/EssentialsWinter', (req, res) => {
    fs.readFileSync('EssentialsWinter.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////==6========weddinggifts=============
app.get('/weddinggifts', (req, res) => {
    fs.readFileSync('weddinggifts.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
////==7=======Sports==============
app.get('/sports', (req, res) => {
    fs.readFileSync('sports.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//==8======dress========
app.get('/dress', (req, res) => {
    fs.readFileSync('dress.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
//===9=========kitchen============
app.get('/kitchen', (req, res) => {
    fs.readFileSync('kitchen.js', 'utf-8', (err, result) => {
        res.send(result)
    })
})
app.listen(port, () => {
    console.log('server started' ,port)
})
