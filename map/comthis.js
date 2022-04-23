const maca = {
	value: 2,
};
const laranja = {
	value: 3,
};

function mapArr(arr, thisArg){
	return arr.map(function (num){
		return num * this.value 
	}, thisArg);
}

const nums = [1, 2];
console.log(mapArr(nums, maca));
console.log(mapArr(nums, laranja));