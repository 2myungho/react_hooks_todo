import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";
import TodoInput from "../component/TodoInput";
import TodoList from "../component/TodoList";
import TodoHeader from "../component/TodoHeader";
import TodoSearch from "../component/TodoSearch";

TodoTemplate.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default function TodoTemplate() {
  const [todos, setTodos] = useState([]);
  const [search_todos, setSearch_todos] = useState([]);
  const [search_ch, setSearch_ch] = useState(false);
  let [id, setId] = useState(todos.length + 1);

  console.log(search_todos);

  const onTodoAdd = (value) => {
    const todoObj = [{ id: id, text: value, check: false }];
    setTodos(todos.concat(todoObj));
    setId(id + 1);
    onLS();
  };

  const onLS = useCallback(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onTodoRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onTodoModify = (todoObj) => {
    setTodos(todos.map((todo) => (todo.id === todoObj.id ? todoObj : todo)));
    //todos.map((todo) => (todo.id === todoObj.id ? todoObj : todo))
  };

  const onTodoSearch = (value) => {
    setSearch_ch(true);
    setSearch_todos(todos.filter((todo) => todo.text.includes(value)));
    console.log(todos.filter((todo) => todo.text.includes(value)));
  };

  const onTodoSearch_ch = () => {
    setSearch_ch(false);
  };
  useEffect(() => {
    const todos_local = localStorage.getItem("todos");
    if (todos_local !== null) {
      setTodos(JSON.parse(todos_local));
      setId(JSON.parse(todos_local).length + 1);
    }
  }, []);

  useEffect(() => {
    onLS();
  }, [todos, onLS]);

  return (
    <Container text style={Template.wrap}>
      <Header as="h2">명호의 TodoList </Header>

      {search_ch && <TodoHeader todos={search_todos} />}
      {!search_ch && <TodoHeader todos={todos} />}

      <TodoSearch
        onTodoSearch={onTodoSearch}
        onTodoSearch_ch={onTodoSearch_ch}
      />

      {search_ch && (
        <TodoList
          todos={search_todos}
          onTodoRemove={onTodoRemove}
          onTodoModify={onTodoModify}
        />
      )}

      {!search_ch && (
        <>
          <TodoInput onTodoAdd={onTodoAdd} />
          <TodoList
            todos={todos}
            onTodoRemove={onTodoRemove}
            onTodoModify={onTodoModify}
          />
        </>
      )}
    </Container>
  );
}

const Template = {
  wrap: {
    marginTop: "150px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
  },
};