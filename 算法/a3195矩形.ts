/**
给你一个二维 二进制 数组 grid。

请你找出一个边在水平方向和竖直方向上、面积 最小 的矩形，并且满足 grid 中所有的 1 都在矩形的内部。

返回这个矩形可能的 最小 面积。

1 <= grid.length, grid[i].length <= 1000
grid[i][j] 是 0 或 1。
输入保证 grid 中至少有一个 1 。
 * 
 */


const test_grid = [[0, 0, 0],
                   [0, 0, 0],
                   [0, 0, 0],
                   [1, 0, 1]]
//3,0 3,2
function minimumArea(grid: number[][]): number {
    const count = grid
        .flat()
        .reduce((c, v) => (c + (v === 1 ? 1 : 0)), 0)
    if (count === 1) return 1
    if (count < 1) return 0
    const n = grid.length, m = grid[0].length;
    let min_i = n, max_i = 0;
    let min_j = m, max_j = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                min_i = Math.min(min_i, i);// 3 3
                max_i = Math.max(max_i, i);// 3 3
                min_j = Math.min(min_j, j);// 0 0
                max_j = Math.max(max_j, j);// 0 2
                //console.log(`min_i ${min_i} max_i ${max_i}  min_j ${min_j}  max_j ${max_j}`)
            }

        }
    }

    return (max_j - min_j + 1) * (max_i - min_i + 1)
};

console.log(minimumArea(test_grid))