const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

router.put('/riwayat', async (req, res) => {

    console.log(process.env.nama)

    const riwayat = {
        penyakit_diderita: req.body.penyakit_diderita,
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
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
})

module.exports = router