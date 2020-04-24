//module module yang di butuhkan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()
const path = require('path')

//model data formulir
const Formulir = require('../models/Formulir')
var view = __dirname + "/views/"

router.get('/pai', (req, res) => {
    res.sendFile(path.join(view + "pai.html"))
})
router.get('/indo', (req, res) => {
    res.sendFile(path.join(view + "indo.html"))
})
router.get('/inggris', (req, res) => {
    res.sendFile(path.join(view + "inggris.html"))
})
router.get('/mtk', (req, res) => {
    res.sendFile(path.join(view + "mtk.html"))
})
router.get('/ips', (req, res) => {
    res.sendFile(path.join(view + "ips.html"))
})
router.get('/ipa', (req, res) => {
    res.sendFile(path.join(view + "ipa.html"))
})
router.get('/prestasi', (req, res) => {
    res.sendFile(path.join(view + "prestasi.html"))
})

//api untuk simpan data nilai calon murid
//kenapa post, karena html tidak mendukung put
router.post('/pai', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            pai: {
                semester1: req.body.semester1_pai,
                semester2: req.body.semester2_pai,
                semester3: req.body.semester3_pai,
                semester4: req.body.semester4_pai,
                semester5: req.body.semester5_pai
            }
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

//nilai ipa
router.post('/ipa', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            ipa: {
                semester1: req.body.semester1_ipa,
                semester2: req.body.semester2_ipa,
                semester3: req.body.semester3_ipa,
                semester4: req.body.semester4_ipa,
                semester5: req.body.semester5_ipa
            }
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

//nilai mtk
router.post('/mtk', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            matematika: {
                semester1: req.body.semester1_matematika,
                semester2: req.body.semester2_matematika,
                semester3: req.body.semester3_matematika,
                semester4: req.body.semester4_matematika,
                semester5: req.body.semester5_matematika
            }
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

//nilai inggris
router.post('/inggris', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            bahasa_inggris: {
                semester1: req.body.semester1_bahasa_inggris,
                semester2: req.body.semester2_bahasa_inggris,
                semester3: req.body.semester3_bahasa_inggris,
                semester4: req.body.semester4_bahasa_inggris,
                semester5: req.body.semester5_bahasa_inggris
            }
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

//prestasi yang didapat
router.post('/prestasi', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            prestasi_diraih: req.body.prestasi_diraih
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

//nilai ips
router.post('/ips', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            ips: {
                semester1: req.body.semester1_ips,
                semester2: req.body.semester2_ips,
                semester3: req.body.semester3_ips,
                semester4: req.body.semester4_ips,
                semester5: req.body.semester5_ips
            }
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

//nilai indo
router.post('/indo', async (req, res) => {
    //memasukan ke database
    Formulir.updateOne({
            nama_lengkap: process.env.nama
        }, {
            $set: {
                bahasa_indonesia: {
                    semester1: req.body.semester1_bahasa_indonesia,
                    semester2: req.body.semester2_bahasa_indonesia,
                    semester3: req.body.semester3_bahasa_indonesia,
                    semester4: req.body.semester4_bahasa_indonesia,
                    semester5: req.body.semester5_bahasa_indonesia
                }
            }
        },
        (err, result) => {
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