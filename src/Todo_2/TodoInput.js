import React,{useState} from 'react'
import PropTypes from "prop-types";
import { Form, Dropdown } from 'semantic-ui-react'

TodoInput.propTypes = {
    onTodoAdd: PropTypes.func.isRequired,
}

export default function TodoInput({
        onTodoAdd,
    }) {
    const [value, setValue] = useState('');
    const [value_ch, setValue_ch] = useState('all')

    const onChange = (e) => {
        const curVlaue = e.target.value
        const newValue = curVlaue;
        if(value_ch === 'all'){
            setValue(newValue);
        }else if(value_ch === 'string'){
            const newValue = curVlaue.replace(/[0-9]/g, '')
            setValue(newValue)
        }else if(value_ch === 'num'){
            const newValue = curVlaue.replace(/[^0-9]/g, '')
            setValue(newValue)
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        onTodoAdd(value)
        setValue('')
    }
    const onDropdown = (e,d) => {
        setValue_ch(d.value);
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
                <Dropdown 
                    placeholder='Select' 
                    clearable 
                    options={options} 
                    selection
                    onChange={onDropdown}
                    defaultValue={options[0].value}
                />
            </Form.Group>
        </Form>
    )
}

const options = [
    { key: 1, text:"전체", value: 'all' },
    { key: 2, text:"문자", value: 'string' },
    { key: 3, text:"숫자", value: 'num' },
  ]