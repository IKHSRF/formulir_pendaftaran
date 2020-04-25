//module yang fucked up
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongo = require('mongoose')
const hbs = require('hbs')
const path = require('path')

//connect ke database local karena sedang broke tidak bisa sewa database
mongo.connect('mongodb://localhost:27017/formulir', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//console log jika error
const db = mongo.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Berhasil Terhubung ke database'))

//menggunakan body parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

//inisialisasi route
const muridRoute = require('./routes/murids')
const alamatRoute = require('./routes/alamats')
const ortuRoute = require('./routes/ortus')
const riwayatRoute = require('./routes/kesehatans')
const nilaiRoute = require('./routes/nilais')
const informasiRoute = require('./routes/informasi')

//using route
app.use('/murid', muridRoute)
app.use('/alamat', alamatRoute)
app.use('/ortu', ortuRoute)
app.use('/kesehatan', riwayatRoute)
app.use('/nilai', nilaiRoute)
app.use('/informasi', informasiRoute)

//buka port
app.listen(3000, () => {
    console.log('Server Running on 3000 port')
})