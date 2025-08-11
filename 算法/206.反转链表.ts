/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// O(3n) 简单暴力
export function reverseList(head: ListNode | null): ListNode | null {
    let p  = head
    let arrayRecord: number[] = new Array(0);
    while(p != null){
        arrayRecord.push(p.val)
        p = p.next
    }
    let pStart = head 
    p = head
    arrayRecord = arrayRecord.reverse()
    let i = 0;
    while(p != null){
        p.val = arrayRecord[i];
        p = p.next;
        i++;
    }
    return pStart
};
//时间复杂度 O(n) 直接翻转指针
export function reverseList_O1n(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    while(current != null){
        const next = current.next;
        current.next = prev;

        prev = current;
        current = next;
        
    }
    return prev;
}
let c3 = new ListNode(5);
let c2 = new ListNode(4, c3);
let c1 = new ListNode(8, c2);


console.log(reverseList_O1n(c1))