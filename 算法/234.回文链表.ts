/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。
 * 如果是，返回 true ；否则，返回 false 。
 * 
    输入：head = [1,2,2,1]
    输出：true
 * 
 * 性能要求：进阶： O(n) 时间复杂度和 O(1) 空间复杂度
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const getListNodeMiddleLength = (head:ListNode):number =>{
    let nodeLength = 0;
    let p = head;
    while(p!=null){
        p = p.next;
        nodeLength ++;
    }
    return nodeLength / 2;
}

// 翻转后半段
const reverseList =  (head:ListNode,middleLen:number) : ListNode =>{
    let prev:ListNode | null = null;
    let current: ListNode | null = head;
    for(let i = 0 ; i< middleLen; i++){
        prev = current;
        current = current.next;
    }
    //避免环
    prev = null;
    while(current != null){
        const next = current.next;
        current.next = prev;

        prev = current;
        current = next;
    }
    return prev;
}

function isPalindrome(head: ListNode | null): boolean {
    let p = head
    let nodeMiddleLength = getListNodeMiddleLength(p);
    p = head
    let endPointer = reverseList(p,nodeMiddleLength);
    while(endPointer!= null){
        if(endPointer.val !== head.val) return false;
        endPointer = endPointer.next;
        head = head.next;
    }
    return true;
};


let c4 = new ListNode(1)
let c3 = new ListNode(2, c4);
let c2 = new ListNode(2, c3);
let c1 = new ListNode(1, c2);


console.log(isPalindrome(c1))