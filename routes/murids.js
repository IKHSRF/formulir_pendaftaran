//module module yang diperlukan
const express = require("express")
const router = express.Router()
const Nama = require('../models/Data')
const path = require('path')
require('dotenv').config()

//model data formulir
const Formulir = require('../models/Formulir')

//inisialiasisi dirname untuk html
var view = __dirname + "/views/"

//tampilan frontend dari halaman pendaftaran
router.get('/', (req, res) => {
    res.sendFile(path.join(view + "halamanDepan.html"))
})

//tampilan frontend dari halaman pengisian data calon murid
router.get('/pendaftaran', (req, res) => {
    res.sendFile(path.join(view + "pendaftaran.html"))
})

//api untuk pendaftaran
router.post('/daftar', async (req, res) => {

    var a = req.body

    const daftar = new Formulir({
        no_pendaftaran: a.no_pendaftaran,
        no_tes: a.no_tes,
    })

    try {
        const newdaftar = await daftar.save()
        res.redirect('/murid/pendaftaran')
    } catch (err) {
        res.status(400).json(err.message)
    }
    process.env.daftar = daftar.no_pendaftaran
})

//update data calon murid, html tidak mendukung put
router.post('/ubahcalonmurid', async (req, res) => {
    const a = req.body
    Formulir.updateOne({
        nama_lengkap: process.env.nama
    }, {
        $set: {
            jalur_penerimaan: a.jalur_penerimaan,
            nama_lengkap: a.nama_lengkap,
            nama_panggilan: a.nama_panggilan,
            tempat_lahir: a.tempat_lahir,
            agama: a.agama,
            cita_cita: a.cita_cita,
            hoby: a.hoby,
            anak_ke: a.anak_ke,
            jumlah_saudara: {
                kandung: a.kandung,
                tiri: a.tiri,
                angkat: a.angkat
            },
            berat_badan: a.berat_badan,
            tinggi_badan: a.tinggi_badan,
            golongan_darah: a.golongan_darah,
            jenis_kelamin: a.jenis_kelamin,
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).redirect('/alamat')
    })
    process.env.nama = calon.nama_lengkap
})

//api untuk data calon murid
//kenapa post karena tidak bisa put
router.post('/calonmurid', async (req, res) => {

    const a = req.body

    Formulir.updateOne({
        no_pendaftaran: process.env.daftar
    }, {
        $set: {
            jalur_penerimaan: a.jalur_penerimaan,
            nama_lengkap: a.nama_lengkap,
            nama_panggilan: a.nama_panggilan,
            tempat_lahir: a.tempat_lahir,
            agama: a.agama,
            cita_cita: a.cita_cita,
            hoby: a.hoby,
            anak_ke: a.anak_ke,
            jumlah_saudara: {
                kandung: a.kandung,
                tiri: a.tiri,
                angkat: a.angkat
            },
            berat_badan: a.berat_badan,
            tinggi_badan: a.tinggi_badan,
            golongan_darah: a.golongan_darah,
            jenis_kelamin: a.jenis_kelamin,
        }
    }, (err, result) => {
        if (err) {
            throw err
        }
        res.status(201).redirect('/alamat')
    })
    process.env.nama = a.nama_lengkap
})

module.exports = router