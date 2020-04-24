const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mongo = require('mongoose')
const hbs = require('hbs')
const path = require('path')

mongo.connect('mongodb://localhost:27017/formulir', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongo.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Berhasil Terhubung ke database'))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

const muridRoute = require('./routes/murids')
const alamatRoute = require('./routes/alamats')
const ortuRoute = require('./routes/ortus')
const riwayatRoute = require('./routes/kesehatans')
const nilaiRoute = require('./routes/nilais')
app.use('/murid', muridRoute)
app.use('/alamat', alamatRoute)
app.use('/ortu', ortuRoute)
app.use('/kesehatan', riwayatRoute)
app.use('/nilai', nilaiRoute)

app.listen(3000, () => {
    console.log('Server Running on 3000 port')
})