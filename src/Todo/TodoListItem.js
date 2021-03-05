import React, {useState} from 'react'
import { Button, List, Form, Input } from 'semantic-ui-react'

export default function TodoListItem({
        todo,
        onTodoRemove,
        onTodoModify
    }) {

    const [modify_ch, setModify_ch] = useState(true);
    const [value, setValue] = useState(todo.text);
    const [todo_modi, setTodo_modi] = useState(todo);

    const onClick_Remove = () => {onTodoRemove(todo.id);}
    const onClick_Modify_ch = () => {setModify_ch(!modify_ch)}

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = () => {
        setTodo_modi({
            ...todo,
            text: value
        })
        onTodoModify(todo_modi);
        onClick_Modify_ch(!todo_modi);
    }

    return (
        <List.Item>
            {modify_ch ?
            <>
                <List.Content floated='right'>
                    <Button 
                        color='vk'
                        onClick={onClick_Modify_ch}
                    >Modify</Button>
                    <Button 
                        color='google plus' 
                        onClick={onClick_Remove}
                    >Remove</Button>
                </List.Content>
                <List.Content style={{color:"#666666"}}>{value}</List.Content>
                </>
            : 
            <Form onSubmit={onSubmit}> 
                <Form.Group>
                    <Input 
                        placeholder="Todo를 입력하세요!"
                        value={value}
                        onChange={onChange}
                        style={{width:'70%'}}
                    />
                    <List.Content floated='right'>
                        <Button color='vk' content='Confirm'/>
                        <Button color='google plus' content='Exit' onClick={onClick_Modify_ch}/>
                    </List.Content>
                </Form.Group>
            </Form>
            }
        </List.Item>
    )
}
