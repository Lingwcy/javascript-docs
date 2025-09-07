/**
 * 
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

n = 5
1,2,3,4,5
1,2,3,5
1,2,4,5
2,3,4,5
2,4,5
2,3,5

n=4   5种
1,2,3,4
1,3,4
1,2,4
2,3,4
2,4

n=3    3种
1,2,3
1,3
2,3

n=2   2种
1,2
2

n=1  1种
1

得出 dp(n) = dp(n-1) + dp(n-2)

 */


function climbStairs(n: number,memo = new Map()): number {
    if(memo.has(n)) return memo.get(n)
    if(n<=2) return n
    const result = climbStairs(n-2,memo) + climbStairs(n-1,memo)
    memo.set(n, result)
    return result
};

console.log(
climbStairs(5))