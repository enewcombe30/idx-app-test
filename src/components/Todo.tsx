import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "../state/store"
import { AddTodo, RemoveTodo  } from "../state/todos"
import { useState } from "react"

type Todo = {
    id: number,
    value: string
}

export default function Todo(){
    const [value, setValue] = useState('')
    const todos = useSelector((state: RootState) => state.todos)
    const todoDispatch = useDispatch<AppDispatch>()

    function handleAddTodo(value: string){
        todoDispatch(AddTodo({id: todos.length + 1, value: value}))
        setValue('')
    }
    return (
        <>
            <div>
                <div className='w-fit mx-auto text-4xl font-bold mt-4 mb-2'>Todo List</div>
                <div className="flex w-fit mx-auto">
                    <input type='text' 
                        value={value} 
                        onChange={((e) => setValue(e.target.value))} 
                        className='border border-grey-300 p-[0.5] pl-2'
                    />
                    <button className="w-fit h-fit p-2 border-grey-300 border-2 cursor-pointer ml-4" onClick={() => {handleAddTodo(value)}}>
                        Add Todo
                    </button>   
                </div>
                <ol>
                    {todos && todos.map(((todo: Todo) => 
                        <li className="flex">
                            <div key={todo.id}> {todo.value}</div>
                            <div onClick={() => todoDispatch(RemoveTodo(todo.id))} className="ml-4 text-red-500 cursor-pointer">X</div>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}