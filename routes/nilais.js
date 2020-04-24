//module module yang di butuhkan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

//api untuk simpan data nilai calon murid
//kenapa post, karena html tidak mendukung put
router.post('/rapor', async (req, res) => {
    const rapor = {
        pai: {
            semester1: req.body.semester1_pai,
            semester2: req.body.semester2_pai,
            semester3: req.body.semester3_pai,
            semester4: req.body.semester4_pai,
            semester5: req.body.semester5_pai
        },
        bahasa_indonesia: {
            semester1: req.body.semester1_bahasa_indonesia,
            semester2: req.body.semester2_bahasa_indonesia,
            semester3: req.body.semester3_bahasa_indonesia,
            semester4: req.body.semester4_bahasa_indonesia,
            semester5: req.body.semester5_bahasa_indonesia
        },
        bahasa_inggris: {
            semester1: req.body.semester1_bahasa_inggris,
            semester2: req.body.semester2_bahasa_inggris,
            semester3: req.body.semester3_bahasa_inggris,
            semester4: req.body.semester4_bahasa_inggris,
            semester5: req.body.semester5_bahasa_inggris
        },
        matematika: {
            semester1: req.body.semester1_matematika,
            semester2: req.body.semester2_matematika,
            semester3: req.body.semester3_matematika,
            semester4: req.body.semester4_matematika,
            semester5: req.body.semester5_matematika
        },
        ipa: {
            semester1: req.body.semester1_ipa,
            semester2: req.body.semester2_ipa,
            semester3: req.body.semester3_ipa,
            semester4: req.body.semester4_ipa,
            semester5: req.body.semester5_ipa
        },
        ips: {
            semester1: req.body.semester1_ips,
            semester2: req.body.semester2_ips,
            semester3: req.body.semester3_ips,
            semester4: req.body.semester4_ips,
            semester5: req.body.semester5_ips
        },
        prestasi_diraih: req.body.prestasi_diraih
    }

    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            nilai_rapor: rapor
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

//export dulu gan, nanti error
module.exports = router