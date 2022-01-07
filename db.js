const db_KTP = require("pg").db_KTP;
const NIK = require ("NIK");
const db_KTP = new db_KTP({
    NIK: "5204260804920001",
    Nama: "Raehanol Fitranuddin",
    Alamat: "Sumbawa NTB",
    Umur: "30",
    Gender: "M",
    Status: "Kawin",
    photo: "-",
    // host: "localhost",
    // port: 5000
});

module.exports = { db_KTP }  