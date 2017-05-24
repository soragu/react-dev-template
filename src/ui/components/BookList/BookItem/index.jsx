function BookItem(props){
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.stock}</td>
        </tr>
    );
}

BookItem.propTypes = {
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    stock: React.PropTypes.number,
};

export default BookItem;