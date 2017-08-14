let transformArrToLowerCase = arr => {
	let map = arr.map(isiArr => {
		return isiArr.toLowerCase();
	});
	return map;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi']));