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
  let proceed = false;
  let root = null;
  let cur = null;
  let left = l1;
  let right = l2;

  const valAcc = (val) => {
    let value = val;
    if (proceed) {
      value += 1;
      proceed = false;
    }

    if (value > 9) {
      proceed = true;
      value %= 10;
    }

    return value;
  }

  const appendNode = (val) => {
    if (!root) {
      root = new ListNode(val)
      cur = root;
    } else {
      const newNode = new ListNode(val);
      cur.next = newNode;
      cur = cur.next;
    }
  }

  while(left && right) {
    let val = left.val + right.val;
    appendNode(valAcc(val))

    left = left.next;
    right = right.next;
  }

  while(left) {
    appendNode(valAcc(left.val))
    left = left.next;
  }
  
  while(right) {
    appendNode(valAcc(right.val))
    right = right.next;
  }
  if (proceed) {
    appendNode(1)
  }

  return root;
};