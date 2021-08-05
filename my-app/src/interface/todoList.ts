interface todoList {
    inputValue: string,
    list: Array<string>
}

export interface defaultStateInerface {
    todoList: todoList
}

export interface actionInterface {
    readonly type: string,
    readonly value: any
}
