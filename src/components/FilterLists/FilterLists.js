import { useState } from "react";
import "./FilterLists.css";
const FilterLists = (props) => {
    const [filterOption, setFilterOption] = useState('All');
    const submitHandler = (event) => {
        event.preventDefault();
        props.onFilterLists(filterOption);
    }
    const onChangeOptionHandler = (event) => {
        setFilterOption(event.target.value);
    }
    const options = props.options.map((eachItem, index) => {
        return <option key={index} value={eachItem.value}>{eachItem}</option>;
    });
    return( <div className="filter-lists">
        <form onSubmit={submitHandler}>
            <select className="filter-lists-dropdown" onChange ={()=>onChangeOptionHandler}>
                {options}
            </select>
            <button type="submit">Show</button>
        </form>
    </div>)
}
export default FilterLists;