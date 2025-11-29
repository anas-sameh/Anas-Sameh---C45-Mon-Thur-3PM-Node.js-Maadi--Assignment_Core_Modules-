/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function findKthPositive(arr, k) {
    let missingCount = 0;   
    let current = 1;        
    let i = 0;             

    while (true) {
        if (i < arr.length && arr[i] === current) {
            i++;
        } else {
            
            missingCount++;
            if (missingCount === k) {
                return current; 
            }
        }
        current++;
    }
}

console.log(findKthPositive([2,3,4,7,11], 5)); 
console.log(findKthPositive([1,2,3,4], 2));  