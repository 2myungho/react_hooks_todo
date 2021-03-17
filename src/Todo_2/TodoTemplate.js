import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { Container, Header } from "semantic-ui-react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoHeader from "./TodoHeader";
import TodoSearch from "./TodoSearch";

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
    //item을 잘 출력하는데 왜 전체 값을 가져오는 걸까?
    //필터로 거르는 역할을 했었는데 todos가 변할 때마다 값을 불러오니까 안됐었나 보다,.
    //그러면 modify했을 때 값이 변하는게 어떻게 해야 보일 수 있을까?
    //setSearch_todos가 변하면 되는게 맞기는 한데..
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
