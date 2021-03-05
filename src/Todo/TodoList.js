import React from 'react'
import TodoListItem from './TodoListItem'
import { List } from 'semantic-ui-react'

export default function TodoList({
        todos,
        onTodoRemove,
        onTodoModify
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
