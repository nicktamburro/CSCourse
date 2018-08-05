function Bubble(array){

//make a boolean called swap
let swap = true;


do{
	//loop through all the numbers, if you find any out of order, swap them
	for (i = 0; i<array.length; i++){
		//if the first number is bigger than the second... 
		if(array[i] > array[i+1]){
			//use this three-step swapping process, t = temporary
			let t = array[i];
			array[i] = array[i+1];
			array[i+1] = t;
			//and swap is still true, since we made a swap
			//set swap to true, still
			swap = true;
		}else{
			//no swamps, swap = false
			//if no swaps, swap = false
			swap = false;
		}
	}
//if swap is false finish the loop, everything's in order
}while(swap == true);

//give us the sorted array...
console.log(array);
}

let array = [3, 2, 1, 5];
Bubble(array);