import { connect } from 'react-redux';
import * as booksActionCreator from 'Actions/SearchPage/books';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import BookList from 'Components/BookList';
import SearchBar from 'Components/SearchBar';
import bindActions from './action';
import styles from './index.scss';

class SearchPageContainer extends React.Component {
    render() {
        const {filter, query, books, dispatch} = this.props;
        const actions = bindActions(dispatch);
        return (
            <Grid className={styles.searchContainer}>
                <PageHeader>Search</PageHeader>
                <Grid>
                    <Row>
                        <Col xs={12} >
                            <SearchBar 
                                filter={filter} 
                                query={query} 
                                {...actions}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col xs={12} >
                            <BookList items={books} />
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter,
        query: state.query,
        books: state.books,
    };
}

export default connect(mapStateToProps)(SearchPageContainer);