import React,{useState} from 'react'
import PropTypes from "prop-types";
import { Form, Dropdown } from 'semantic-ui-react'

TodoInput.propTypes = {
    onTodoAdd: PropTypes.func.isRequired,
    onTodo_dropdown: PropTypes.func.isRequired,
}

export default function TodoInput({
        onTodoAdd,
        onTodo_dropdown
    }) {
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        onTodoAdd(value)
        setValue('')
    }
    const onDropdown = (e,d) => {onTodo_dropdown(d.value)}

    return (
        <Form onSubmit={onSubmit}> 
            <Form.Group>
                <Form.Input 
                    placeholder="Todo를 입력하세요!"
                    value={value}
                    onChange={onChange}
                />
                <Form.Button color='twitter' content='Todo Add'/>
                <Dropdown 
                    placeholder='Select' 
                    clearable 
                    options={options} 
                    selection
                    onChange={onDropdown}
                />
            </Form.Group>
        </Form>
    )
}

const options = [
    { key: 1, text:"전체", value: 'all' },
    { key: 2, text:"문자", value: 'string' },
    { key: 3, text:"숫자", value: 'int' },
  ]