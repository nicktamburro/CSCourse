//first we need a function that break the array down...

function mergeSort(nums) {
	//if it's one, we're done breaking it down, so return it...
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
  
  //then it takes the two arrays, and puts them back through, where
  //they get broken down further, until their length is <2
  return merge(mergeSort(left), mergeSort(right));
};

//NEXT we have to find a way to stitch them back together IN ORDER, one piece at a time...