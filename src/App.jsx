import './styles.css'
import {useState} from "react";
import {InputTodo} from "./components/InputTodo";
import {IncompleteTodos} from "./components/IncompleteTodos";

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
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
            <IncompleteTodos
                incompleteTodos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
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
