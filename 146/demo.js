function Node (key, val) {
  this.prev = null;
  this.next = null;
  this.val = val;
  this.key = key;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity  = capacity;
  this.size = 0;
  this.map = new Map();
  this.head = new Node(0);
  this.tail = new Node(0);

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function(node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;
}

LRUCache.prototype.addToHead = function(node) {
  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
}

LRUCache.prototype.moveToHead = function(node) {
  this.removeNode(node)
  this.addToHead(node)
}

LRUCache.prototype.removeTail = function() {
  const node = this.tail.prev;
  this.removeNode(node)
  return node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.map.get(key);
  if (!node) {
    return -1;
  }
  this.moveToHead(node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.map.get(key);
  if (!node) {
    // 不存在
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.addToHead(newNode);
    this.size += 1;
    
    if (this.size > this.capacity) {
      // 删除末尾元素
      const tail = this.removeTail();
      this.size --;
      this.map.delete(tail.key);
    }
  } else {
    node.val = value;
    this.moveToHead(node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const instance = new LRUCache(2);
instance.put(2, 1)
instance.put(2, 2)
console.log(instance.get(2))
// instance.put(3, 3);
// console.log(instance.get(2)) // -1
// instance.put(4, 4)
// console.log(instance.get(1))
// console.log(instance.get(3))
// console.log(instance.get(4))
