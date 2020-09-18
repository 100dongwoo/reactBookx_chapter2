import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

function App() {
    /*   const [todos,setTodos] = useState([{

      }]); */

    //함수 형태로 넣어주면 컴포넌트가 처음 렌더링될때만 함수가 실행된다.
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'qweqwe',
            checked: true,
        },
        {
            id: 2,
            text: 'asdf',
            checked: true,
        },
        {
            id: 3,
            text: 'qwasdfasdfsdaeqwe',
            checked: true,
        },
        {
            id: 4,
            text: 'qweasdfasfdsqwe',
            checked: false,
        },
    ]);

    //고윳값으로 사용될 id
    //ref를 사용하여 변수담기
    const nextId = useRef(4);

    //추가
    const onInsert = useCallback(
        (text) => {
            const todo = {
                id: nextId.current,
                text,
                checked: false,
            };

            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos]
    );

    //삭제
    const onRemove = useCallback(
        (id) => {
            setTodos(todos.filter((todo) => todo.id !== id));
        },
        [todos]
    );

    //수정
    const onToggle = useCallback(
        (id) => {
            setTodos(
                todos.map((todo) =>
                    todo.id === id ? { ...todo, checked: !todo.checked } : todo
                )
            );
        },

        [todos]
    );

    return (
        <TodoTemplate>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
    );
}

export default App;
