import React,{useState} from 'react'
import { Form } from 'semantic-ui-react'

export default function TodoInput({
        onTodoAdd
    }) {
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        onTodoAdd(value)
        setValue('')
    }

    return (
        <Form onSubmit={onSubmit}> 
            <Form.Group>
                <Form.Input 
                    placeholder="Todo를 입력하세요!"
                    value={value}
                    onChange={onChange}
                />
                <Form.Button color='twitter' content='Todo Add'/>
            </Form.Group>
        </Form>
    )
}
