/**
 * 给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
 */


function countSquares(matrix: number[][]): number {
    const m = matrix.length
    const n = matrix[0].length
    //创建 n,m 的 dp表格
    const dp = Array.from({ length: m }, () => Array(n).fill(0))
    let count: number = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 1) {
                if (i === 0 || j === 0) dp[i][j] = 1
                else {
                    //用 dp[i][j] 表示以 matrix[i][j] 为右下角的最大正方形边长
                    //右下角右下角的最大正方形边长 又等于 相邻节点最小边长（木桶效应） + 1(本身)
                    dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
                }
                // 无论如何，只要右下角为1 都会进行累加
                count += dp[i][j]
            }
        }
    }

    return count

};