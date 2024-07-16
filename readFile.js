const fs = require('fs');
const namaFile = 'teks.txt';

fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Gagal membaca file ${namaFile}: ${err}`);
        return;
    }
    console.log(`Isi file ${namaFile}`);
    console.log(data);
});