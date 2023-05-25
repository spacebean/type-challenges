interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

export type InorderTraversal<
    T extends TreeNode | null,
    NT extends TreeNode = NonNullable<T>
    > = T extends null
    ? []
    : T extends TreeNode
    ? [...InorderTraversal<NT['left']>, NT['val'], ...InorderTraversal<NT['right']>]
    : never
