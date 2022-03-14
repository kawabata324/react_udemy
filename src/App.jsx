import './styles.css'
import {useState} from "react";

export const App = () => {
    const [todoText, setTodoText] = useState('')
    const [incompleteTodos, setIncompleteTodos] = useState([])
    const [completeTodos, setCompleteTodos] = useState([])

    const onChangeTodoText = (event) => setTodoText(event.target.value)

    const onClickAdd = () => {
        if (todoText === "") return
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText('')
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos]
        newTodos.splice(index, 1)
        setIncompleteTodos(newTodos)
    }

    const onClickComplete = (index) => {
        const newCompleteTodo = incompleteTodos[index]
        const newCompleteTodos = [...completeTodos, newCompleteTodo]

        const newIncompleteTodos = [...incompleteTodos]
        newIncompleteTodos.splice(index, 1)

        setCompleteTodos(newCompleteTodos)
        setIncompleteTodos(newIncompleteTodos)
    }

    const onClickReturn = (index) => {
        const newIncompleteTodo = completeTodos[index]
        const newIncompleteTodos = [...incompleteTodos, newIncompleteTodo]

        const newCompleteTodos = [...completeTodos]
        newCompleteTodos.splice(index, 1)

        setIncompleteTodos(newIncompleteTodos)
        setCompleteTodos(newCompleteTodos)
    }

    return (
        <>
            <div className="input-area">
                <input type="text" placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText}/>
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className="incomplete-area">
                <p className="title">未完了のTodo</p>
                <ul>
                    {incompleteTodos.map((todo, index) => {
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
            <div className="complete-area">
                <p className="title">完了のTodo</p>
                <ul>
                    {completeTodos.map((todo, index) => {
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
};
