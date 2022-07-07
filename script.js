function ListNode(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}


let node = new ListNode(0);
let head;
let n = 5;
let temp = node;

for (let i = 1; i < n; i++) {
    head = temp;
    temp.next = new ListNode(i);
    temp.prev = head;
    temp = temp.next;
}
temp.prev = head;
temp.next = node;
node.prev = temp;

console.log(node);

