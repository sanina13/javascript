function reduceSoma(arr){
	return arr.reduce(callback)
}

function callback(prev, current){
	return prev + current
}

arr = [1, 4, 5]

console.log(reduceSoma(arr))