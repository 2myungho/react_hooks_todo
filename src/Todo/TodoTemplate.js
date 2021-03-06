import React, {useEffect, useState} from 'react'
import PropTypes from "prop-types";
import { Container, Header } from 'semantic-ui-react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import TodoSearch from './TodoSearch'

TodoTemplate.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default function TodoTemplate() {

    const [todos, setTodos] = useState([
        {id: 1, text: "테스트 Todo입니다.", check: false},
        {id: 2, text: "123", check: false},
    ])
    const [search_todos, setSearch_todos] = useState([])
    const [search_ch, setSearch_ch] = useState(false);
    let [id, setId] = useState(3)
    const [dropdown_value, setDropdown_value] = useState("all");

    localStorage.setItem('todos', JSON.stringify(todos))
    const todos_local = localStorage.getItem("todos");
    console.log(todos_local)
    
    const onTodoAdd = (value) => {
        const todoObj = [{id: id, text: value, check: false}]
        setTodos(todos.concat(todoObj))
        setId(id+1)
    }

    const onTodoRemove = (id) => {
        setTodos(todos.filter( todo => todo.id !== id))
    }

    const onTodoModify = (todoObj) => {
        setTodos(todos.map(todo => todo.id === todoObj.id ? todoObj : todo))
    }

    const onTodoSearch = (value) => {
        setSearch_ch(true);
        setSearch_todos(todos.filter( todo => todo.text.includes(value)))
    }

    const onTodoSearch_ch = () => {
        setSearch_ch(false);
    }
    
    const onTodo_dropdown = (value) => {
        setDropdown_value(value)
    }

    useEffect(() => {
       
        
        
    },[])

    return (
        <Container text style={Template.wrap}>
            <Header as='h2'>명호의 TodoList {todos[0].text}</Header>
            <TodoHeader 
                todos={todos}
            />
            <TodoSearch 
                onTodoSearch={onTodoSearch}
                onTodoSearch_ch={onTodoSearch_ch}
            />
            {search_ch 
            ? <TodoList 
                todos={search_todos}
                onTodoRemove={onTodoRemove}
                onTodoModify={onTodoModify}
            />
            : <>
                <TodoInput 
                    onTodoAdd={onTodoAdd}
                    onTodo_dropdown={onTodo_dropdown}
                />
                <TodoList 
                    todos={todos}
                    onTodoRemove={onTodoRemove}
                    onTodoModify={onTodoModify}
                    dropdown_value={dropdown_value}
                />
            </>
            }
            
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