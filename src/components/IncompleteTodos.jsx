export const IncompleteTodos = (props) => {
    const {todos, onClickComplete, onClickDelete, style} = props

    return (
        <>
            <div style={style}>
                <p className="title">未完了のTodo</p>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickComplete(index)}>完了</button>
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}