import { useState } from 'react';

function NewListItem(props) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const submitHandler = (event) => {
    setNewTitle(event.target[0].value);
    setNewDescription(event.target[1].value);
    event.preventDefault();
    const newListItem = {
      title: newTitle,
      description: newDescription,
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
  return (
    <form className="newlist-form" onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input 
            type="text" 
            value={newTitle}
            onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={newDescription} onChange={descriptionChangeHandler}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default NewListItem;
