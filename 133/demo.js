var cloneGraph = function (node) {
  let visited = new Map()
  function dfs(node) {
      if (node === null) return node
      if (visited.has(node)) return visited.get(node)
      let cloneNode = new Node(node.val, [])
      visited.set(node, cloneNode)
      for (const n of node.neighbors) {
          cloneNode.neighbors.push(dfs(n))
      }
      return cloneNode
  }
  return dfs(node)
};
