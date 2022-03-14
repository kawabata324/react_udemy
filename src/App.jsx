import './styles.css'
import {useState} from "react";
import {InputTodo} from "./components/InputTodo";
import {IncompleteTodos} from "./components/IncompleteTodos";
import {CompleteTodos} from "./components/CompleteTodos";

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
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                style={{
                    backgroundColor: '#c1ffff',
                    width: '400px',
                    height: '30px',
                    borderRadius: '8px',
                    padding: '8px',
                    margin: '8px'
                }}
            />
            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
                style={{
                    backgroundColor: '#c6ffe2',
                    width: '400px',
                    minHeight: '200px',
                    padding: '8px',
                    margin: '8px',
                    borderRadius: '8px'
                }}
            />
            <CompleteTodos
                todos={completeTodos}
                onClickReturn={onClickReturn}
                style={{
                    backgroundColor: '#ffffe0',
                    width: '400px',
                    minHeight: '200px',
                    padding: '8px',
                    margin: '8px',
                    borderRadius: '8px'
                }}
            />
        </>
    )
};
