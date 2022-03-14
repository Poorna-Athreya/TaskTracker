import React, { useState } from 'react';

import './App.css';
import FilterLists from './components/FilterLists/FilterLists';
import List from './components/Lists/List';
import NewListItem from './components/NewListItem/NewListItem';

const INITIAL_DUMMY_LISTS = [
  { id:1, title: 'Grocery List', description: 'Get items from the grocery store', hours: 2},
  { id:2, title: 'Bills Pending', description: 'Monthly bills to pay', hours: 10},
  { id:3, title: 'Exam chapters', description: 'Chapters to study for exam', hours: 60 },
];
const listFilterOptions = ['All', '< 50 hrs', '> 50 hrs and < 100 hrs', '> 100 hrs'];
function App() {
  const [listItems, setListItems] = useState(INITIAL_DUMMY_LISTS);
  const [renderListItems, setRenderListItems] = useState(listItems);
  const filterLists = (filterListsOption) => {
    let renderListItemsWrite;
    // console.log("Inside filterOptions function");
    switch(filterListsOption){
      case '< 50 hrs':{
        renderListItemsWrite = listItems.filter((item) => item.hours<50);
        break;
      }
      case '> 50 hrs and < 100 hrs':{
        renderListItemsWrite = listItems.filter((item) => item.hours>50 && item.hours<100);
        break;
      }
      case '> 100 hrs' : {
        renderListItemsWrite = listItems.filter((item) => {
          return item.hours>100
        });
        break;
      }
      default:{
        renderListItemsWrite = listItems;
        console.log('Render Lists: ', renderListItemsWrite);
      }
    }
    setRenderListItems((prevRenderListItems) =>  renderListItemsWrite);
  }
  const saveNewListData = (newListData) => {
    const newListDataWrite = {...newListData};
    newListDataWrite.id = listItems.length+1;
    console.log("New : ",newListDataWrite);
    setListItems((prevLists) => [...prevLists,newListDataWrite]);
    // console.log('ListItems new: ', listItems);
    filterLists('All');
  };
  return(
    <div className="App">
      <FilterLists options={listFilterOptions} onFilterLists ={filterLists}/>
      <List listItems={renderListItems} />
      <NewListItem onSaveNewListData= {saveNewListData} />
    </div>
  );
}

export default App;
