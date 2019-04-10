import React, { Component } from 'react'
import { loadDataCol1, loadDataCol2, loadDataCol3 } from '../actions'
import { connect } from 'react-redux';

class Images extends Component {

    componentDidMount() {
        this.props.loadDataCol1()
        this.props.loadDataCol2()
        this.props.loadDataCol3()
    }

    render() {
        return (
            Object.keys(this.props.search) <= 0 &&
            <div className="App-images-search">
                    <div className="col-images">
                        {this.props.col1.map(img =>
                            <a href={img.links.html} target="window.open();" key={img.id}>
                                <img src={img.urls.small} alt={img.description} />
                            </a>
                        )
                        }
                    </div>
                    <div className="col-images">
                        {this.props.col2.map(img =>
                            <a href={img.links.html} target="window.open();" key={img.id}>
                                <img src={img.urls.small} alt={img.description} />
                            </a>
                        )
                        }
                    </div>
                    <div className="col-images">
                        {this.props.col3.map(img =>
                            <a href={img.links.html} target="window.open();" key={img.id}>
                                <img src={img.urls.small} alt={img.description} />
                            </a>
                        )
                        }
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetchingCol1: state.dataCol1.isFetching,
        col1: state.dataCol1.col1,
        isFetchingCol2: state.dataCol2.isFetching,
        col2: state.dataCol2.col2,
        isFetchingCol3: state.dataCol3.isFetching,
        col3: state.dataCol3.col3,
        search: state.dataSearch1.search1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataCol1: () => dispatch(loadDataCol1()),
        loadDataCol2: () => dispatch(loadDataCol2()),
        loadDataCol3: () => dispatch(loadDataCol3())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images)