import { connect } from 'react-redux';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import BookList from 'Components/BookList';
import SearchBar from 'Components/SearchBar';
import bindActions from './actions';
import { getVisibleBooks } from './selectors';
import styles from './index.scss';

class SearchPageContainer extends React.Component {
    render() {
        const {books, dispatch} = this.props;
        const actions = bindActions(dispatch);
        return (
            <Grid className={styles.searchContainer}>
                <PageHeader>Search</PageHeader>
                <Grid>
                    <Row>
                        <Col xs={12} >
                            <SearchBar 
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

SearchPageContainer.propTypes = {
    books: React.PropTypes.array,
    dispatch: React.PropTypes.func,
};

function mapStateToProps(state) {
    return {
        books: getVisibleBooks(state),
    };
}

export default connect(mapStateToProps)(SearchPageContainer);