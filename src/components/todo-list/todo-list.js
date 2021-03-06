import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({ todos,
                      onDeleted,
                      onToggleImportant,
                      onToggleDone
                  }) => {

    const elements = todos.map((item) => {

        const { id, ...itemProps} = item; // чтобы id передать только в key,
        return (                          // а остальное - в <TodoListItem />
            <li key={id} className="list-group-item">
                <TodoListItem
                    { ...itemProps }
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        )
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    )
}

export default TodoList;