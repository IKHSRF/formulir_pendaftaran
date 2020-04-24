//module module yang diperlukan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()
const path = require('path')

//model data formulir
const Formulir = require('../models/Formulir')
var view = __dirname + "/views/"

router.get('/dataayah', (req, res) => {
    res.sendFile(path.join(view + "ayah.html"))
})
router.get('/dataibu', (req, res) => {
    res.sendFile(path.join(view + "ibu.html"))
})
router.get('/datawali', (req, res) => {
    res.sendFile(path.join(view + "wali.html"))
})

//api untuk simpan data ayah
//kenapa post, karena html tidak dukung put
router.post('/ayah', async (req, res) => {
    const ayah = {
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        pekerjaan: req.body.pekerjaan,
        pendidikan: req.body.pendidikan,
        kewarganegaraan: req.body.kewarganegaraan,
        agama: req.body.agama,
        nohp: req.body.nohp
    }

    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            ayah: ayah
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).redirect('/ortu/dataibu')
    })
})

//api untuk simpan data ibu
//kenapa post, karena html tidak dukung put
router.post('/ibu', async (req, res) => {
    const ibu = {
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        pekerjaan: req.body.pekerjaan,
        pendidikan: req.body.pendidikan,
        kewarganegaraan: req.body.kewarganegaraan,
        agama: req.body.agama,
        nohp: req.body.nohp
    }

    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            ibu: ibu
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).redirect('/ortu/datawali')
    })
})

//api untuk simpan data wali
//kenapa post, karena html tidak dukung put
router.post('/wali', async (req, res) => {
    const wali = {
        nama: req.body.nama,
        tempat_lahir: req.body.tempat_lahir,
        pekerjaan: req.body.pekerjaan,
        pendidikan: req.body.pendidikan,
        kewarganegaraan: req.body.kewarganegaraan,
        agama: req.body.agama,
        nohp: req.body.nohp
    }

    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            wali: wali
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).redirect('/nilai')
    })
})

//export dulu gan, nanti error
module.exports = router