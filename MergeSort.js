//first we need a function that break the array down...

function mergeSort(nums) {
	//if it's one, we're done breaking it down, so return it...
  //also this is the first step for writing recursion, you have to give it a condition
  //to STOP so it doesn't give us infinite loop / stack overflow
  if (nums.length < 2) {
    return nums;
  }
  //calculates length
  const length = nums.length;
  //finds the middle element (if there is one)
  const middle = Math.floor(length / 2);
  //takes all the numbers from 0 to "middle"
  const left = nums.slice(0, middle);
  //takes all the numbers for "middle" to the end
  const right = nums.slice(middle);
  //prob could also say nums.slice(middle, nums[length - 1]);
  
  //then it takes the two arrays, and puts them back through, where
  //they get broken down further, until their length is <2
  return merge(mergeSort(left), mergeSort(right));
};

//NEXT we have to find a way to stitch them back together IN ORDER, one piece at a time...
//const merge = (left, right) = > {}
function merge(left, right){

//we make an array called results
  const results = [];


//while there is something in both left and right
  while(left.length && right.length){
    //they're saying left is undefined...
    
    //compare them
    if (left[0] <= right[0]){
      //put in the lower one first, at the beginning
      results.push(left.shift());
    }
    else{
      results.push(right.shift());
    }
  }
  //if one side is empty, combine them
  console.log(results.concat(left, right));

//that's it? 
};

let numbers = [23, 2, 5, 3, 67, 8, 100, 1];
let more = [-1, 0.1, 10, 101, -100];
mergeSort(numbers);