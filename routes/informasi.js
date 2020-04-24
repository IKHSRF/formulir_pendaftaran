//module module yang diperlukan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

//api untuk informasi terkahir
router.post('/informasi', async (req, res) => {

    const informasi = {
        informasi_smk: req.body.informasi_smk,
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
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
})

//export lagi jangan lupa, error nanti
module.exports = router