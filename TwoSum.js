/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arr = []
   for(i=0;i<nums.length;i++){
       diff = target-nums[i]
       j = nums.indexOf(diff)
       if(nums.includes(diff) && !(i==j)){
           arr.push(i, j)
           return arr
       }
   }
};
