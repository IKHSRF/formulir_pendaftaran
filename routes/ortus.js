const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

//api untuk ayah
router.put('/ayah', async (req, res) => {
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
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
})

//api untuk ibu
router.put('/ibu', async (req, res) => {
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
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
})

//api untuk wali 
router.put('/wali', async (req, res) => {
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
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
})

module.exports = router