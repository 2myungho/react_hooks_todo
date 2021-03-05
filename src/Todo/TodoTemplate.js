import React, {useState} from 'react'
import { Container, Header } from 'semantic-ui-react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default function TodoTemplate({todos}) {
    const [todos_add, setTodos_add] = useState(todos)
    let [id, setId] = useState(2)

    const onTodoAdd = (value) => {
        const todoObj = [{id: id, text: value}]
        setTodos_add(todos_add.concat(todoObj))
        setId(id+1)
    }

    const onTodoRemove = (id) => {
        setTodos_add(todos_add.filter( todo => todo.id !== id))
    }

    const onTodoModify = (todoObj) => {
        setTodos_add(todos_add.map(todo => todo.id === todoObj.id ? todoObj : todo))
    }
    

    return (
        <Container text style={Template.wrap}>
            <Header as='h2'>명호의 TodoList</Header>
            <TodoInput 
                onTodoAdd={onTodoAdd}
            />
            <TodoList 
                todos={todos_add}
                onTodoRemove={onTodoRemove}
                onTodoModify={onTodoModify}
            />
        </Container>
    )
}

const Template = {
    wrap: {
        marginTop: '150px',
        background:'#ffffff',
        padding:'30px',
        borderRadius: '10px'
    }
}