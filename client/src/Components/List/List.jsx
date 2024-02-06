import ListItem from "./ListItem"

const List = (props) => {
    const ListCollection = props.products.map((el, index) => <ListItem handleDeleteProduct={props.handleDeleteProduct} key={index} name={el.name} price={el.price} id={el.id}/>)
    return (
       <ul>
            {ListCollection}
       </ul>
    )
}

export default List