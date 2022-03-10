import './ListItem.css';
import { useState } from 'react';

function ListItem(props) {
  const [newTitle, setNewTitle] = useState(props.title);
  const changeTitleHandler = () => {
    console.log('Old Title: ', props.title);
    setNewTitle('Updated Title!');
    console.log('Changed to: ', newTitle);
  };
  return (
    <div className="list-item-container">
      <h1>{newTitle}</h1>
      <p>{props.description}</p>
      <button onClick={() => changeTitleHandler()}>Change Title</button>
    </div>
  );
}
export default ListItem;
