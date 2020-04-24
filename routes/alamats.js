//module module yang diperlukan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
const path = require('path')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

//view untuk frontend
var view = __dirname + "/views/"

//frontend dari data tempat tinggal calon murid
router.get('/', (req, res) => {
    res.sendFile(path.join(view + "alamat.html"))
})

//api untuk simpan data tempat tinggal calon murid
//gabisa pake put jadi pake post aja, tapi sama aja kok
router.post('/tempat_tinggal', async (req, res) => {

    const tempat_tinggal = {
        alamat: req.body.alamat,
        kelurahan: req.body.kelurahan,
        kecamatan: req.body.kecamatan,
        kota_kabupaten: req.body.kota_kabupaten,
        propinsi: req.body.propinsi,
        no_telepon_rumah: req.body.no_telepon_rumah,
        email: req.body.email,
        kode_pos: req.body.kode_pos,
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
        res.status(201).redirect('/kesehatan')
    })
})

//export dulu gan, jangan lupa
module.exports = router