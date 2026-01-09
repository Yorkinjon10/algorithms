function dfs(node) {
    if (!node) {
        return;
    }

    console.log(node.value);

    dfs(node.left);
    dfs(node.right);
}

function createNode(value) {
    return {
        value: value,
        left: null,
        right: null
    };
}

var root = createNode(1);
root.left = createNode(2);
root.right = createNode(3);
root.left.left = createNode(4);
root.left.right = createNode(5);

console.log(root);

dfs(root);
