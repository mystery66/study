element 值
子节点

前端
Map , set 基于树，
html DOM 树
react vnode dom diff

二叉树 
  只有两个节点， 左子树 ， 右子树
root 根
完美二叉树 k  子节点 2^(k-1)
总节点树： (2^k)-1

特例： 二叉搜索树 BST (Binary search Tree)
1. 二叉树
2. 左子节点小于小于父节点小于子节点 （父节点比左子树大，比右子树小）

搜索 
BST 节点的插入
1. 如果树中没有任何节点， 根节点，
2. 如果节点比树的根节点或数的节点， 值更大， 则放在右子树， 反之放在左节点。
3. 重复第二点操作， 直至找到空节点插入

BST遍历由三种形式
1. 中序遍历   以最小到最大的顺序访问所有节点
2. 先序遍历   祖先节点优先于后代节点的顺序遍历
3. 后序遍历   先访问节点后代节点，在访问本身

