/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]
 
 */


// 复杂度o(n) 用for模拟非零指针
function moveZeroes(nums: number[]): void {
    let lastNonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[lastNonZeroIndex];
            nums[lastNonZeroIndex] = temp;
            lastNonZeroIndex++;
        }
        console.log(`lastindex: ${lastNonZeroIndex}, i:${i},nums:${nums}`)
    }
}

const nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)






