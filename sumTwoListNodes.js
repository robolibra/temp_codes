/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let node1 = [];
    let node2 = [];
    let result = [];

    while (l1.next != null) {
        node1.push(l1.val);
        l1 = l1.next;
    }
    node1.push(l1.val);

    while (l2.next != null) {
        node2.push(l2.val);
        l2 = l2.next;
    }
    node2.push(l2.val);

    result = sumArrays(node1, node2);

    let resultNode = new ListNode(result[0]);

    let temp = resultNode;
    for (let i = 1; i < result.length; i++) {
        temp.next = new ListNode(result[i]);
        temp = temp.next;
    }

    return resultNode;

    ///////////////////////////////////////////////////////////////
    function sumArrays(arr1, arr2) {
        let sum = 0;
        let offset = 0;
        let tmp = [];
        let sumArr = [];

        if (arr1.length < arr2.length) {
            tmp = [...arr2];
            arr2 = [...arr1];
            arr1 = [...tmp];
        }
        for (let i = 0; i < arr2.length; i++) {
            sum = arr1[i] + arr2[i] + offset;

            if (sum > 9) {
                sumArr.push(sum % 10);
                offset = 1;
            } else {
                sumArr.push(sum);
                offset = 0;
            }
        }

        for (let i = arr2.length; i < arr1.length; i++) {
            sum = arr1[i] + offset;
            if (sum > 9) {
                sumArr.push(sum % 10);
                offset = 1;
            } else {
                sumArr.push(sum);
                offset = 0;
            }
        }
        if (offset == 1) {
            sumArr.push(1);
        }

        return sumArr;
    }

};