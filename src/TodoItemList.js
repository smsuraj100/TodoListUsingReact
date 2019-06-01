import React from 'react';

function TodoItemList(props) {
    const createTask = item => {
        const deleteKey = 'D'+item.key;
        return (
            <div flex="100" className="itemList row">
                <li key={item.key}>{item.text}</li>
                <button type="submit" key={deleteKey} onClick={() => props.deleteItem(deleteKey)}> X </button>
            </div>
        );
    }

    const todoEntries = props.entries;
    const listItems = todoEntries.map(createTask);

    return (
        <ul className="theList">{listItems}</ul>
    );
}

export default TodoItemList;