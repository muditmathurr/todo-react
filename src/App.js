import './App.css';
import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listofItems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
  });
  setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");
    setItems((oldItem) => {
      return oldItem.filter((arrElement, index) => {
          return index !== id;
      });
    });
  };  

  return (
    <>
      <div className='main-div'>
        <div className='centre-div'>
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type='text' placeholder='Add Some Items' onChange={itemEvent} value={inputList} />
          <button onClick={listofItems}> + </button>
          <ol> 
           { Items.map( (itemval, index)  => {
              return(
                <ToDoList // component
                  key = {index} // property 1
                  id = {index}  // property 2
                  text = {itemval}  // property 3
                  onSelect = {deleteItems} 
              />
              );
            })}
          </ol>

        </div>
      </div>
    </>
  )
}
export default App;
