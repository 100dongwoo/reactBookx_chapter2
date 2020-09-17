import React from 'react';
import {
    MdRemoveCircleOutline,
    MdCheckBox,
    MdCheckBoxOutlineBlank,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todos, onRemove, onToggle }) => {
    const { checked, text, id } = todos;
    return (
        <div className="TodoListItem">
            <div
                className={cn('checkBox', { checked })}
                onClick={() => onToggle(id)}
            >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

                <div className="text">{text}</div>
            </div>

            <div className="remove" onClick={() => onRemove(id)}>
                {' '}
                <MdRemoveCircleOutline />{' '}
            </div>
        </div>
    );
};

//shouldComponentUpdate라는 라이플사이클 과 같다
// 컴포넌트의 props가 바뀌지 않는다면 리렌더링되지 않는다
export default React.memo(TodoListItem);
