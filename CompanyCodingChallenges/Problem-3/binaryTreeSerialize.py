import pickle


class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
    def __repr__(self):
        return 'Node (val = %s, left = %s, right = %s)' % (self.val, self.left, self.right)

    # def __str__(self):
    #     return "val: %s, left: %s, right: %s" % (self.val, self.left, self.right)

node = Node('root', Node('left', Node('left.left')), Node('right'))

def serialize(node: Node) -> str:
    return pickle.dumps(node)

def deserialize(nodeString: str) -> Node:
    return pickle.loads(nodeString)

print("Here is the node printed: ", node)

treeToString = serialize(node)
print("Serialized tree: ", treeToString)
stringToTree = deserialize(treeToString)
print("Deserialized tree: ", stringToTree)

print(deserialize(serialize(node)).left.left.val == 'left.left')

