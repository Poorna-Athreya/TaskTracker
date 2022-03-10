import './ListItem.css';
// import { useState } from 'react';

function ListItem(props) {
  // const [newTitle, setNewTitle] = useState(props.title);
  // const changeTitleHandler = () => {
  //   console.log('Old Title: ', props.title);
  //   setNewTitle('Updated Title!');
  //   console.log('Changed to: ', newTitle);
  // };
  return (
    <div className="list-item-container">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p><strong>Duration:</strong> {props.hours} hours</p>
      {/* <button onClick={() => changeTitleHandler()}>Change Title</button> */}
    </div>
  );
}
export default ListItem;
