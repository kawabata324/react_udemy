

export const InputTodo = (props) => {
    const {todoText, onChange, onClick, style} = props

    return (
    <>
        <div style={style}>
            <input type="text" placeholder="Todoを入力" value={todoText} onChange={onChange}/>
            <button onClick={onClick}>追加</button>
        </div>
    </>
)
}