function bubbleSort (nums) {
  let swap = true;  
  do{
        for(i=0;i<nums.length;i++){
          if(nums[i] > nums[i+1]){
          let t = nums[i];
          nums[i] = nums[i+1];
          nums[i+1] = t;
          swap = true;
      }else{swap == false};
  }
  }while(swap == true);
 if(swap == false)
   return nums;
  snapshot(nums)
  
}
// unit tests
// do not modify the below code
/*describe('bubble sort', function() {
  it('should sort correctly', () => {
    var nums = [10,5,3,8,2,6,4,7,9,1];
    bubbleSort(nums);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    done();
  });
});*/