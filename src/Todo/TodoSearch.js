import React,{useState} from 'react'
import PropTypes from "prop-types";
import { Form, Button } from 'semantic-ui-react'

TodoSearch.propTypes = {
    onTodoSearch: PropTypes.func.isRequired,
    onTodoSearch_ch: PropTypes.func.isRequired,
}

export default function TodoSearch ({onTodoSearch, onTodoSearch_ch}) {

    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value);
    const onSearch = (e) => {
        e.preventDefault();
        onTodoSearch(value);
        setValue('')
    }
    const onExit = () => {onTodoSearch_ch()}
    
    return (
        <Form> 
            <Form.Group>
                <Form.Input 
                    placeholder="Todo를 검색하세요!"
                    value={value}
                    onChange={onChange}
                    icon='search'
                />
                <Button content='Search' onClick={onSearch}/>
                <Form.Button content='Exit' onClick={onExit}/>
            </Form.Group>
        </Form>
    );
};
