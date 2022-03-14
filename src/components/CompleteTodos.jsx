export const CompleteTodos = (props) => {

    const {todos, onClickReturn, style} = props
    return (
        <>
            <div style={style}>
                <p className="title">完了のTodo</p>
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <div key={todo} className="list-row">
                                <li>{todo}</li>
                                <button onClick={() => onClickReturn(index)}>戻す</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}