import React, { useState } from 'react';
import './App.css';
import ToDoList from './TodoList';
function App() {
  const [inputItem, setInputItem] = useState("");
  const [items,setItems] = useState([]);
  const itemEvent = (event)=>{
    setInputItem(event.target.value);
  };
  const itemData =() =>{
    setItems((oldItem)=>{
      return [...oldItem,inputItem];
    })
    setInputItem("");
  };
  const deleteItem =(id)=>{
    setItems((oldItem)=>{
      return oldItem.filter((arrElem,index)=>{
        return index!== id;
      }); 
    });
  };
  return (
    <div className="App">
      <div className="center-div">
        <h1> ToDo List </h1><br/>
        <p className="p">
          <input type="text" value={inputItem} placeholder="Add Your Items" onChange={itemEvent} />
          <button className='btn1' onClick={itemData} > + </button><br/>
        </p>
        <ol>
          
          {items.map((itemVal,index)=>{
            return <ToDoList
                srcImg="https://cdn1.iconfinder.com/data/icons/3d-printing-icon-set/512/Delete.png"
                key={index}
                id={index}
                text={itemVal}
                onSelect ={deleteItem}
              />
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
