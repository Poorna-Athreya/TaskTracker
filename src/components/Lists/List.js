import ListItem from "../ListItems/ListItem";
import "./List.css";
const List = (props) => {
    const listItems = props.listItems.map((eachItem) => {
        return <ListItem key={eachItem.id} title={eachItem.title} description={eachItem.description}></ListItem>;
    });
    return(<div className="list-container">
            {listItems}
    </div>)
}
export default List;