function Bubble(array){

let swap = true;

do{
	swap = false;
	for (i = 0; i<array.length; i++){
		if(array[i] > array[i+1]){
			let t = array[i];
			array[i] = array[i+1];
			array[i+1] = t;
			swap = true;
		}
	}

}while(swap == true);

console.log(array);
}

let array = [3, 2, 1, 5];
Bubble(array);