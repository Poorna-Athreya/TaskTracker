import React, { useState } from 'react';

import './App.css';
import List from './components/Lists/List';
import NewListItem from './components/NewListItem/NewListItem';
const INITIAL_DUMMY_LISTS = [
  { id:1, title: 'Grocery List', description: 'Get items from the grocery store', hours: 2},
  { id:2, title: 'Bills Pending', description: 'Monthly bills to pay', hours: 10},
  { id:3, title: 'Exam chapters', description: 'Chapters to study for exam', hours: 60 },
];
function App() {
  const [listItems, setListItems] = useState(INITIAL_DUMMY_LISTS);
  const saveNewListData = (newListData) => {
    const newListDataWrite = {...newListData};
    newListDataWrite.id = listItems.length+1;
    console.log("New ",newListDataWrite);
    setListItems([...listItems,newListDataWrite]);
  };
  return (
    <div className="App">
      <List listItems={listItems} />
      <NewListItem onSaveNewListData= {saveNewListData} />
    </div>
  );
}

export default App;
