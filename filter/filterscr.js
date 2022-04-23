function filterPar(arr){
	return arr.filter((num) => num % 2 === 0)
}

arr = [2, 3, 7, 8, 10, 11, 14]

console.log(filterPar(arr))