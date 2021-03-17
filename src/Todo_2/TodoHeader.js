import React from 'react';
import PropTypes from "prop-types";
import { Grid } from 'semantic-ui-react'

TodoHeader.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default function TodoHeader ({todos}){
    const complete = todos.filter(todo => todo.check ===true );
    const remain = todos.filter(todo => todo.check === false);

    return (
        <Grid columns={3} divided style={todoHeader.wrap}>
            <Grid.Row>
                <Grid.Column>
                    {`전체 ${todos.length} 개`}
                </Grid.Column>
                <Grid.Column>
                    {`완료 ${complete.length} 개`}
                </Grid.Column>
                <Grid.Column>
                    {`남은 Todo ${remain.length} 개`}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

const todoHeader = {
    wrap:{marginBottom:'10px', textAlign:'center'}
}