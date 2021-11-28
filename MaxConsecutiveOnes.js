/* Given a binary array nums, return the maximum number of consecutive 1's in the array.

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.

*/


const findMaxConsecutiveOnes = (nums) => {
    let count = 0;
    let max = 0;
    nums.forEach(element => {
        element === 1 ? count++ : count = 0;
        if(count > max) max = count;
    })
    return max;
};


// for each element in nums, is it equal to 1? if so increase count by 1 and if not count is equal to zero. if count is greater than max, max is now equal to count. return max 
