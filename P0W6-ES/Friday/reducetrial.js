var reduceFindMaximum = arr => {
  // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
  let reduce = arr.reduce((isiArr1, isiArr2) => {
  	return Math.max(isiArr1, isiArr2);
  })
  return reduce;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9