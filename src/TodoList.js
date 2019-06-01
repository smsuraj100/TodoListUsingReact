import React, { useEffect } from 'react';

function TodoList(props) {
    useEffect(() => {
        // props.inputElement.currentItem.focus();
    });

    return (
        <div className="todoListMain">
            <h1 className="header">Todo List:</h1>
            <form onSubmit={props.addItem}>
                <input
                    placeholder="Enter Task"
                    ref={props.inputElement}
                    value={props.currentItem.text}
                    onChange={props.handleInput}
                />
                <button type="submit"> Add </button>
            </form>
        </div>
    );
}

export default TodoList;