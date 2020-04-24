const mongoose = require('mongoose')

//Schema untuk database formulir pendaftaran
const formulirSchema = new mongoose.Schema({
    no_pendaftaran: {
        type: String
    },
    no_tes: {
        type: String
    },
    jalur_penerimaan: {
        type: String
    },
    foto: {
        type: String
    },
    nama_lengkap: {
        type: String
    },
    nama_panggilan: {
        type: String
    },
    jenis_kelamin: {
        type: String
    },
    tempat_lahir: {
        type: String
    },
    agama: {
        type: String
    },
    cita_cita: {
        type: String
    },
    hoby: {
        type: String
    },
    anak_ke: {
        type: String
    },
    jumlah_saudara: {
        type: String
    },
    berat_badan: {
        type: String
    },
    tinggi_badan: {
        type: String
    },
    golongan_darah: {
        type: String
    },
    alamat_rumah: {
        alamat: {
            type: String
        },
        kelurahan: {
            type: String
        },
        kecamatan: {
            type: String
        },
        kota_kabupaten: {
            type: String
        },
        propinsi: {
            type: String
        },
        no_telepon_rumah: {
            type: String
        },
        email: {
            type: String
        },
        kode_pos: {
            type: String
        },
        tinggal_dengan: {
            type: String
        }
    },
    keterangan_kesehatan: {
        penyakit_diderita: {
            lain_lain: {
                type: String
            },
            tbc: {
                type: String
            },
            malaria: {
                type: String
            },
            chotipa: {
                type: String
            },
            cacar: {
                type: String
            },
        },
        kelainan_jasmani: {
            type: String
        },
    },
    ayah: {
        nama: {
            type: String
        },
        tempat_lahir: {
            type: String
        },
        pekerjaan: {
            type: String
        },
        pendidikan: {
            type: String
        },
        kewarganegaraan: {
            type: String
        },
        agama: {
            type: String
        },
        nohp: {
            type: String
        }
    },
    ibu: {
        nama: {
            type: String
        },
        tempat_lahir: {
            type: String
        },
        pekerjaan: {
            type: String
        },
        pendidikan: {
            type: String
        },
        kewarganegaraan: {
            type: String
        },
        agama: {
            type: String
        },
        nohp: {
            type: String
        }
    },
    wali: {
        nama: {
            type: String
        },
        tempat_lahir: {
            type: String
        },
        pekerjaan: {
            type: String
        },
        pendidikan: {
            type: String
        },
        kewarganegaraan: {
            type: String
        },
        agama: {
            type: String
        },
        nohp: {
            type: String
        }
    },
    nilai_rapor: {
        pai: {
            semester1: {
                type: String
            },
            semester2: {
                type: String
            },
            semester3: {
                type: String
            },
            semester4: {
                type: String
            },
            semester5: {
                type: String
            }
        },
        bahasa_indonesia: {
            semester1: {
                type: String
            },
            semester2: {
                type: String
            },
            semester3: {
                type: String
            },
            semester4: {
                type: String
            },
            semester5: {
                type: String
            }
        },
        bahasa_inggris: {
            semester1: {
                type: String
            },
            semester2: {
                type: String
            },
            semester3: {
                type: String
            },
            semester4: {
                type: String
            },
            semester5: {
                type: String
            }
        },
        matematika: {
            semester1: {
                type: String
            },
            semester2: {
                type: String
            },
            semester3: {
                type: String
            },
            semester4: {
                type: String
            },
            semester5: {
                type: String
            }
        },
        ipa: {
            semester1: {
                type: String
            },
            semester2: {
                type: String
            },
            semester3: {
                type: String
            },
            semester4: {
                type: String
            },
            semester5: {
                type: String
            }
        },
        ips: {
            semester1: {
                type: String
            },
            semester2: {
                type: String
            },
            semester3: {
                type: String
            },
            semester4: {
                type: String
            },
            semester5: {
                type: String
            }
        },
        prestasi_diraih: {
            type: String
        }
    },
    mengetahui: {
        informasi_smk: {
            type: String
        },
        ttd_orangtua: {
            type: String
        }
    }
})

module.exports = mongoose.model('formulir', formulirSchema)