//module module yang diperlukan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()
const path = require('path')

//model data formulir
const Formulir = require('../models/Formulir')

var view = __dirname + "/views/"

router.get('/', (req, res) => {
    res.sendFile(path.join(view + "kesehatan.html"))
})

//api untuk data riwayat kesehatan calon murid
router.post('/riwayat', async (req, res) => {
    const riwayat = {
        penyakit_diderita: {
            lain_lain: req.body.lain_lain,
            tbc: req.body.tbc,
            malaria: req.body.malaria,
            chotipa: req.body.chotipa,
            cacar: req.body.cacar
        },
        kelainan_jasmani: req.body.kelainan_jasmani
    }
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            keterangan_kesehatan: riwayat
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).redirect('/ortu/dataayah')
    })
})

//jangan lupa export gan, nanti error
module.exports = router