"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

import { Button, FormControl } from "react-bootstrap";
import ListGroup from "react-bootstrap/esm/ListGroup";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          // eslint-disable-next-line react/jsx-key
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
<hr/></div>
);}

