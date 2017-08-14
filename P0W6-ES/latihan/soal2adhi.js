function group(names) {
  /*
  1. siapkan array besar kosong hasil akhir
  2. siapkan array" kecil kosong (sub-array) yang mewakili masing-masing huruf
  3. akses setiap array" kecilnya berdasarkan ada huruf apa aja
  4. akses setiap nama di dalam array kecil dan masukin
  5. masukkan setiap array kecil ke dalam array besar
  */
  
  var result = [];
  var hurufApaAja = []; // ['b', 'j', 'a']
  
  for(var i = 0; i < names.length; i++) {
    var depanKata = names[i][0];
    if(hurufApaAja.indexOf(depanKata) === -1) { // jika huruf unik belum ada
      hurufApaAja.push(depanKata);
    }
  }
  
  for(var j = 0; j < hurufApaAja.length; j++) {
    var arrayKecil = []; // sekarang lagi ember B
    for(var k = 0; k < names.length; k++) {
      if(names[k][0] === hurufApaAja[j]) {
        arrayKecil.push(names[k]);
      }
    }
    
      result.push(arrayKecil);
  }
  
  return result;
  
}

console.log(group(['budi', 'badu', 'jono', 'joni', 'ani', 'anto', 'bobo', 'jajang', 'cacing']));