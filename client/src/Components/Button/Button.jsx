const Button = (props) => {
    return (
        <button 
        onClick={()=>props.handleDeleteProduct(props.id)}>Delete</button>
    )
}

export default Button