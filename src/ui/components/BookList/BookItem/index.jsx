function BookItem(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.stock}</td>
        </tr>
    );
}

export default BookItem;