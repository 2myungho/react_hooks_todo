import React from 'react'
import PropTypes from "prop-types";
import TodoListItem from './TodoListItem'
import { List } from 'semantic-ui-react'

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoRemove: PropTypes.func.isRequired,
    onTodoModify: PropTypes.func.isRequired,
}

export default function TodoList({
        todos,
        onTodoRemove,
        onTodoModify,
    }) {
        
    const todoList = todos.map(todo => {
        return(
            <TodoListItem 
                key={todo.id} 
                todo={todo}
                onTodoRemove={onTodoRemove}
                onTodoModify={onTodoModify}
            />
        )
        
    })
    return (
        <List selection verticalAlign='middle'>
            {todoList}
        </List>
        
    )
}
