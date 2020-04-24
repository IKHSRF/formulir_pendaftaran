const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
const path = require('path')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

var view = __dirname + "/views/"

router.get('/', (req, res) => {
    res.sendFile(path.join(view + "halamanDepan.html"))
})

router.post('/daftar', async (req, res) => {
    const daftar = new Formulir({
        no_pendaftaran: a.no_pendaftaran,
        no_tes: a.no_tes,
    })

    try {
        const newdaftar = await daftar.save()
        res.status(200).json(newdaftar)
    } catch (err) {
        res.status(400).json(err.message)
    }
    process.env.daftar = daftar.no_pendaftaran
})

router.put('/ubahcalonmurid', async (req, res) => {
    const a = req.body
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            no_pendaftaran: a.no_pendaftaran,
            no_tes: a.no_tes,
            nama_lengkap: a.nama_lengkap,
            nama_panggilan: a.nama_panggilan,
            tempat_lahir: a.tempat_lahir_murid,
            agama: a.agama_murid,
            cita_cita: a.cita_cita,
            hoby: a.hoby,
            anak_ke: a.anak_ke,
            jumlah_saudara: a.jumlah_saudara,
            berat_badan: a.berat_badan,
            tinggi_badan: a.tinggi_badan,
            golongan_darah: a.golongan_darah,
            jenis_kelamin: a.jenis_kelamin,
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
    process.env.nama = calon.nama_lengkap
})

router.put('/calonmurid', async (req, res) => {

    const a = req.body

    Formulir.updateOne({
        daftar: process.env.daftar
    }, {
        $set: {
            no_pendaftaran: a.no_pendaftaran,
            no_tes: a.no_tes,
            nama_lengkap: a.nama_lengkap,
            nama_panggilan: a.nama_panggilan,
            tempat_lahir: a.tempat_lahir_murid,
            agama: a.agama_murid,
            cita_cita: a.cita_cita,
            hoby: a.hoby,
            anak_ke: a.anak_ke,
            jumlah_saudara: a.jumlah_saudara,
            berat_badan: a.berat_badan,
            tinggi_badan: a.tinggi_badan,
            golongan_darah: a.golongan_darah,
            jenis_kelamin: a.jenis_kelamin,
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).json({
            message: "Update Berhasil"
        })
    })
    process.env.nama = calon.nama_lengkap
})

module.exports = router