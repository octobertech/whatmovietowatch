import React, { Component } from 'react'
import {Container, Row, Col, Spinner} from 'reactstrap'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getPopularAction from '../actions/movieActions';
import {getPopular, getPopularError, getPopularPending} from '../reducers/movieReducers';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {getPopular} = this.props
        getPopular()
    }
    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
    }

    render() {
        const {movies, error, pending} = this.props;

        if (!this.shouldComponentRender()) {
            return (
                <Spinner size="lg" color="secondary" />
            )
        }
        return (
            <Container>
                <Row>
                    <Col>
                    Header
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {movies}
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    error: getPopularError(state),
    movies: getPopular(state),
    pending: getPopularPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getPopular: getPopularAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);