import React from 'react'
import PropTypes from "prop-types";
import TodoListItem from './TodoListItem'
import { List } from 'semantic-ui-react'

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onTodoRemove: PropTypes.func.isRequired,
    onTodoModify: PropTypes.func.isRequired,
    dropdown_value: PropTypes.string.isRequired
}

export default function TodoList({
        todos,
        onTodoRemove,
        onTodoModify,
        dropdown_value
    }) {

    const todoList = todos.map(todo => {
        if(dropdown_value === "all"){
            return(
                <TodoListItem 
                    key={todo.id} 
                    todo={todo}
                    onTodoRemove={onTodoRemove}
                    onTodoModify={onTodoModify}
                />
            )
        }else if(dropdown_value === "string"){
            const re = /[^0-9]/g;
            const found = todo.text.match(re);
            
            if(found !== null ){
                return(
                    <TodoListItem 
                        key={todo.id} 
                        todo={todo}
                        onTodoRemove={onTodoRemove}
                        onTodoModify={onTodoModify}
                    />
                )
            }
  
        }else if(dropdown_value === "int"){
            const re = /[0-9]/g;
            const found = todo.text.match(re);

            if(found !== null ){
                return(
                    <TodoListItem 
                        key={todo.id} 
                        todo={todo}
                        onTodoRemove={onTodoRemove}
                        onTodoModify={onTodoModify}
                    />
                )
            }
        }else{
            return(
                <TodoListItem 
                    key={todo.id} 
                    todo={todo}
                    onTodoRemove={onTodoRemove}
                    onTodoModify={onTodoModify}
                />
            )
        }
        
    })
    return (
        <List selection verticalAlign='middle'>
            {todoList}
        </List>
        
    )
}
