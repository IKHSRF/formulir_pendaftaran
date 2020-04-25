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
    res.sendFile(path.join(view + "informasi.html"))
})

//api untuk informasi terkahir
router.post('/informasi', async (req, res) => {

    const informasi = {
        informasi_smk: req.body.keluarga + " " + req.body.website + " " + req.body.teman + " " + req.body.brosur + " " + req.body.smp + " " + req.body.facebook + " " + req.body.karyawan + " " + req.body.lainnya,
        ttd_orangtua: req.body.ttd_orangtua
    }

    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            mengetahui: informasi,
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).sendFile(path.join(view + "akhir.html"))
    })
})

//export lagi jangan lupa, error nanti
module.exports = router