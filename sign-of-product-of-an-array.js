var arraySign = function(nums) {
    let product=1
    for(i in nums){
        product*=nums[i]
    }
    if(product>0){
        return 1
    }else if(product<0){
        return -1
    }else{
        return 0
    }
};
