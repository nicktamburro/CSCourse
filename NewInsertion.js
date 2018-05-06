function Insertion(array){

for(let i = 1; i<array.length; i++){
	for(let j=0; j<i; j++){
		if(array[i]<array[j]){
			let spliced = array.splice(i, 1);
			array.splice(j, 0, spliced[0]);
		}
	}
	
}
console.log(array);
};

array = [5, 3, 4, 2, 1];
Insertion(array);

//it still hangs in the console, keep checking up on this one...