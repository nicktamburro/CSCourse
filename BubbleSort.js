function bubbleSort (nums) {
  //make a boolean to tell us if something has been switched
  let swap = true;  

  do{
    //go through all the numbers, if any are out of order, switch them:
        for(i=0;i<nums.length;i++){
          if(nums[i] > nums[i+1]){
          let t = nums[i];
          nums[i] = nums[i+1];
          nums[i+1] = t;
    //and then set swap to true, another swap has been made
          swap = true;
        //if no numbers out of order, there was no swap
      }else{
        swap == false
      };
  }
  //if there was no swap, stop the loop
  }while(swap == true);
  //if there was no swap, return the sorted numbers
 if(swap == false)
   return nums;
  
}
