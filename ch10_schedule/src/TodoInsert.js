import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

/* import {아이콘이름} from 'react-icons/md
http://react-icons.netlify.com/#/icons/md */
const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            onInsert(value);
            setValue('');
        },
        [value, onInsert]
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="입력" value={value} onChange={onChange}></input>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;
