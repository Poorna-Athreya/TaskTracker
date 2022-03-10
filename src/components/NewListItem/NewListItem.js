import { useState } from 'react';
import "./NewListItem.css";
function NewListItem(props) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newHours, setNewHours] = useState(0);
  const submitHandler = (event) => {
    event.preventDefault();
    const newListItem = {
      title: newTitle,
      description: newDescription,
      hours: newHours
    };
    props.onSaveNewListData(newListItem);
    setNewDescription('');
    setNewTitle('');
  };
  const titleChangeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setNewDescription(event.target.value);
  };

  const hoursChangeHandler = (event) => {
    setNewHours(event.target.value);
  }
  return (
    <div className='newlist-container'>
    <form className="newlist-form" onSubmit={submitHandler}>
      <div className='form-title'>
        <h1> Add List </h1>
      </div>
      <div className='form-inputs'>
        <div className='newlist-title'>
          <label>Title</label>
          <input 
              type="text" 
              value={newTitle}
              onChange={titleChangeHandler}
          />
        </div>
        <div className='newlist-description'>
          <label>Description</label>
          <input type="text" value={newDescription} onChange={descriptionChangeHandler}/>
        </div>
        <div className='newlist-hours'>
          <label>Duration:</label>
          <input 
              type="number" 
              value={newHours}
              onChange={hoursChangeHandler}
          />
        </div>
      </div>
      <button type="submit">+</button>
    </form>
    </div>
  );
}
export default NewListItem;
