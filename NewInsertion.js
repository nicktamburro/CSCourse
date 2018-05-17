function Insertion(array){
//could also be: const Insertion = array => {

//so we start at 1, because you can't sort just one thing...
for(let i = 1; i<array.length; i++){
	//then we do a loop where we sort only what's on the left side of i
	for(let j=0; j<i; j++){
		//if the number on the right is ever small than a number on the left
		if(array[i]<array[j]){
			//make a new array called "spliced", then take "1" thing out of "array", the thing at
			//position "i", and put it into "spliced"
			let spliced = array.splice(i, 1);
			//now, take "array" and at position j, take out nothing, "0", and put in the first thing in
			//the "spliced" array
			array.splice(j, 0, spliced[0]);
		}
	}
}
//then show us the numbers, which should be sorted now
console.log(array);
};

array = [5, 3, 4, 2, 1];
Insertion(array);

//it still hangs in the console, keep checking up on this one...
//it's fixed
//made some dumb mistakes: incremented i in the j loop, 
//just said "spliced = splic(i, 1)" instead of array.splice()
//didn't return or log anything, and 
//did if (i < j) instead of if (array[i] < array[j]);