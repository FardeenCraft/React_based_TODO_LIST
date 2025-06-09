import React, { useState } from 'react';
 import './App.css'; 

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd() {
    if (item.trim() === '') return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = item;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, item]);
    }

    setItem('');
  }

  function handleDelete(index) {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
  }

  function handleEdit(index) {
    setItem(items[index]);
    setEditIndex(index);
  }

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="add item.."
      />
      
      <button onClick={handleAdd}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {items.map((it, index) => (
          <li key={index}>
            {it}
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
