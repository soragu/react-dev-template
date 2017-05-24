import { Table } from 'react-bootstrap';
import BookItem from './BookItem';

function BookList(props) {
    const items = props.items.map((item) => {
        return <BookItem key={item.id} {...item} />;
    });
    return (
        <Table responsive striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
                {items}
            </tbody>
        </Table>
    );
}

BookList.defaultProps = {
    items: []
}

BookList.propTypes = {
    items: React.PropTypes.array
}

export default BookList;
