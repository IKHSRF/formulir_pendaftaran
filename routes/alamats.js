const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

router.put('/tempat_tinggal', async (req, res) => {

    const tempat_tinggal = {
        alamat: req.body.alamat,
        kelurahan: req.body.kelurahan,
        kecamatan: req.body.kecamatan,
        kota_kabupaten: req.body.kota_kabupaten,
        propinsi: req.body.propinsi,
        no_telepon_rumah: req.body.no_telepon_rumah,
        email: req.body.email,
        tinggal_dengan: req.body.tinggal_dengan,
    }

    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            alamat_rumah: tempat_tinggal,
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