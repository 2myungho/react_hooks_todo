import React, {useState,useEffect} from 'react'
import PropTypes from "prop-types";
import { Button, List, Form, Input, Checkbox } from 'semantic-ui-react'

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onTodoRemove: PropTypes.func.isRequired,
    onTodoModify: PropTypes.func.isRequired,
}

export default function TodoListItem({
        todo,
        onTodoRemove,
        onTodoModify
    }) {

    const [modify_ch, setModify_ch] = useState(true);
    const [value, setValue] = useState(todo.text);
    const [todoObj, setTodoObj] = useState(todo);

    const onClick_Remove = () => {onTodoRemove(todo.id);}
    const onClick_Modify_ch = () => {setModify_ch(!modify_ch)}

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = () => {
        setTodoObj({
            ...todoObj,
            text: value
        })
        onClick_Modify_ch();
        console.log(todoObj)
    }

    const onClick_check = () => {
        setTodoObj({
            ...todoObj,
            check: !todoObj.check
        })
        onTodoModify(todoObj);
    }

    useEffect(() => {
        onTodoModify(todoObj);
        console.log(todoObj)
    },[todoObj])

    return (
        <List.Item>
            {modify_ch ?
            <>
                {!todoObj.check && 
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
                }
                {!todoObj.check
                    ? <Checkbox label={value} onClick={onClick_check} checked={todoObj.check}
                        style={{display:'inline-block', margin:'10px 0'}}
                    />
                    : <Checkbox label={value} onClick={onClick_check} checked={todoObj.check}
                        style={{display:'inline-block', margin:'10px 0', textDecoration:'line-through', color:'#000'}}
                    />
                }
                
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
