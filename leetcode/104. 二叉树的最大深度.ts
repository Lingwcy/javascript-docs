export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return 1 + (Math.max(maxDepth(root.left),maxDepth(root.right)))
}
let a1: TreeNode;
let b1: TreeNode;
let b2: TreeNode;
let c1: TreeNode;
let c2: TreeNode;
let c3: TreeNode;
let d1: TreeNode;
let d2: TreeNode;
let d3: TreeNode;

// d1 = new TreeNode(6, null, null);
// d2 = new TreeNode(7, null, null);
// d3 = new TreeNode(9, null, null);
// c1 = new TreeNode(4, null, null);
// c2 = new TreeNode(5, d1, d2);
// c3 = new TreeNode(8, d3, null);
// b1 = new TreeNode(2, c1, c2);
// b2 = new TreeNode(3, null, c3);
// a1 = new TreeNode(1, b1, b2);


b1 = new TreeNode(2,null,null);
a1 = new TreeNode(1,null,b1);

console.log(maxDepth(a1));
