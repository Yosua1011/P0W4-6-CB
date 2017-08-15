/**
 * CONTOH
 * TTL : 21 MEI 1998
 * var tanggal = 28;
 * var bulan   = 'Oktober';
 * var tahun   = 1928;
 */
var tanggal = 14; // assign nilai variabel tanggal disini!
var bulan = 'Agustus'; // assign nilai variabel bulan disini! (dengan huruf awal kapital)
var tahun = 2017; // assign nilai variabel tahun disini!

var kodeBulan = 0;

switch (bulan) {
  case 'Januari':
  case 'Oktober':
    kodeBulan = 0;
    break;
  case 'Mei':
    kodeBulan = 1;
    break;
  case 'Agustus':
    kodeBulan = 2;
    break;
  case 'Februari':
  case 'Maret':
  case 'November':
    kodeBulan = 3;
    break;
  case 'Juni':
    kodeBulan = 4;
    break;
  case 'September':
  case 'Desember':
    kodeBulan = 5;
    break;
  default:
    kodeBulan = 6;
}

//Lanjutkan kode dari sini
if (tahun < 2000) {
  var tahunLahir = tahun % 100;
  var tahunLahirBagi4 = Math.floor(tahunLahir/4)
} else {
  tahunLahir = (tahun%100) - 1;
  tahunLahirBagi4 = (Math.floor(tahunLahir/4));
} 
var jawaban = (tahunLahir + tahunLahirBagi4 + tanggal + kodeBulan)%7;


switch (jawaban) {
  case 0: 
    console.log('Minggu');
    break;
  case 1: 
    console.log('Senin');
    break;
  case 2: 
    console.log('Selasa');
    break;
  case 3: 
    console.log('Rabu');
    break;
  case 4: 
    console.log('Kamis');
    break;
  case 5: 
    console.log('Jumat');
    break;
  case 6: 
    console.log('Sabtu');
    break;
  default: 
}

