/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = Array.from(String(n),Number)
    
    let sum=0,prod=1
    for(i=0;i<arr.length;i++){
        sum += arr[i]
        prod *= arr[i]
    }
    return (prod-sum)
};
