/*

2025/5/2/19：00

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]
 
明确输出只有两个元素

*/
//普通解法 时间复杂度为 O(n²)
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let x = i + 1; x < nums.length; x++) {
            if (nums[i] + nums[x] == target) {
                return [i,x]
            }
        }
    }

    return [-1,-1];
};



//哈希表 时间复杂度为 O(n)
function twoSum_hashTable(nums: number[], target: number): number[] {
    const numberMap:Map<number,number> = new Map();
    for (let i=0; i<nums.length; i++) {
        let index:number | undefined = numberMap.get(target - nums[i])
        if(index != undefined && i != index){
            return [index, i]
        }
        numberMap.set(nums[i],i)

    }
    return [-1,-1];
};
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum_hashTable([11, 7, 5, 2], 9))

