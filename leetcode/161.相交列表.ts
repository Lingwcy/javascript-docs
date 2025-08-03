

/**
 * 
 * 
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
— 请注意相交节点的值不为 1，因为在链表 A 和链表 B 之中值为 1 的节点 (A 中第二个节点和 B 中第三个节点) 是不同的节点。换句话说，它们在内存中指向两个不同的位置，而链表 A 和链表 B 中值为 8 的节点 (A 中第三个节点，B 中第四个节点) 在内存中指向相同的位置。

 */

 class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
    }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null;

    let pA = headA, pB = headB;

    while (pA !== pB) {
        pA = pA === null ? headB : pA.next; // 链表A循环结束就循环链表B 
        pB = pB === null ? headA : pB.next; // 链表B循环结束就循环链表A 
    }

    return pA; // 当pA == pB时就是交点
};

function getIntersectionNode_Set(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const listNodeSet = new Set<ListNode>;
    let p = headA;
    while(p !== null){
        listNodeSet.add(p);
        p = p.next;
    }
    
    p = headB;
    while(p!=null){
        if(listNodeSet.has(p)) return p;
        p = p.next;
    }

    return null;

};

let c3 = new ListNode(5);
let c2 = new ListNode(4, c3);
let c1 = new ListNode(8, c2);

let a1 = new ListNode(1);
let a2 = new ListNode(4, a1);
a1.next = c1;

let b3 = new ListNode(1);
let b2 = new ListNode(6, b3);
let b1 = new ListNode(5, b2);
b3.next = c1;

console.log(getIntersectionNode_Set(a1, b1));
