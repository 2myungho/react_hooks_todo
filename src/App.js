import React from 'react'
import TodoTemplate from './Todo/TodoTemplate';
import todoData from './todoData';

export default function App() {
  return <TodoTemplate todos={todoData} />;
}

