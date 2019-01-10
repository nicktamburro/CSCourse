//1st line could also be:
//  
//function insertionSort(nums){
var insertionSort = nums => {  
	//we start a loop on 1, because the first number is already "sorted"
	//i increments
  for (let i = 1; i < nums.length; i++) {

  	//the inner loop loops over things that are only on the Left side of i, 
  	//the part of the array that should be sorted, or mostly sorted
    for (let j = 0; j < i; j++) {

      //if the seond number (which for this loop stays still)
      //is less than any of the numbers before it...
      if (nums[i] < nums[j]) {
      		//making a new array called spliced
      		//from the array nums, take remove 1 thing at the index "i"...
        let spliced = nums.splice(i, 1);

        //at index j, remove nothing, add the first item in spliced... which is "i"
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  console.log(nums);
};

array = [2, 4, 3, 5, 1, 7, 9, 8];
insertionSort(array);

//okay just trying to write it again

function insertionSort2(nums){
  for(i=1; i<nums.length; i++){

    for(j=0; j<i; j++){
      if(nums[i] < nums[j]){
        let spliced = nums.splice(i, 1);
        nums.spice(j, 0, spliced[0]);
      }
    }
  }
  console.log("insertion sort 2 gives us: " + nums);
  //return nums;
};

insertionSort2(array);

//just trying to write it from memory now:
function insertionSort3(nums){
  for(i=1; i<nums.length; i++){
    for(j=0; j<i; j++){

      if(i<j){
        let spliced = nums.spice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  return nums;
};

/*
let spliced = nums.splice(i, 1);
nums.splice(j, 0, spliced[0]);
let spliced = nums.splice(i, 1);
nums.splice(j, 0, spliced[0]);
let spliced = nums.splice(i, 1);
nums.splice(j, 0, splice[0]);