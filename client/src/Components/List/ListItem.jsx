import Button from "../Button/Button"

const ListItem = (props) => {
    return(
        <div>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <Button id={props.id} handleDeleteProduct={props.handleDeleteProduct}/>
        </div>
    )
}

export default ListItem