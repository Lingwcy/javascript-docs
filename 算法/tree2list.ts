type Tree = {
    id: string,
    name: string,
    children?: Tree[]
}

type ListItem = {
    id: string,
    name: string
}

type List = ListItem[]

const data: Tree[] = [
    {
        id: '1',
        name: '父节点1',
        children: [
            {
                id: '1-1',
                name: '子节点1-1',
                children: [
                    {
                        id: '1-1-1',
                        name: '子节点1-1-1'
                    },
                    {
                        id: '1-1-2',
                        name: '子节点1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '父节点2',
        children: [
            {
                id: '2-1',
                name: '子节点2-1'
            }
        ]
    }
]

function tree2list(data: Tree[]) {
    const treeList: List = []

    function traversal(data: Tree[]) {

        data.forEach((value) => {
            if (value.children) {
                traversal(value.children)
                delete value.children
            }
            treeList.push(value)

        })
    }
    traversal(data)
    return treeList
}

const value = tree2list(data)
console.log(value)