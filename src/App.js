import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItemList from './TodoItemList';

function App() {
  const [item, setItem] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', key: '' });

  const inputElememt = React.createRef();

  const handleInput = e => {
    const itemText = e.target.value;
    const currItem = {
      text: itemText,
      key: Date.now()
    }
    setCurrentItem(currItem);
  }

  const addItem = e => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== '') {
      const items = [...item, newItem];
      setItem(items);
      setCurrentItem({ text: '', key: '' });
    }
  }

  const deleteItem = key => {
    const deleteKey = key.substring(1, key.length);
    setItem(item.filter(x => {
      return x.key.toString() !== deleteKey
    }));
  }

  return (
    <div className="App">
      <TodoList
        addItem={addItem}
        inputElememt={inputElememt}
        handleInput={handleInput}
        currentItem={currentItem}
      />
      <TodoItemList
        entries={item}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
