import React, { Component } from 'react'
import { connect } from 'react-redux';

class SearchImages extends Component {

    render() {
        return (
            <div className="App-images-search">
                <div className="col-images">
                    {this.props.search1.map(img =>
                        <a href={img.links.html} target="window.open();" key={img.id}>
                            <img src={img.urls.small} alt={img.description} />
                        </a>
                    )
                    }
                </div>
                <div className="col-images">
                    {this.props.search2.map(img =>
                        <a href={img.links.html} target="window.open();" key={img.id}>
                            <img src={img.urls.small} alt={img.description} />
                        </a>
                    )
                    }
                </div>
                <div className="col-images">
                    {this.props.search3.map(img =>
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
        isFetchingSearch1: state.dataSearch1.isFetching,
        search1: state.dataSearch1.search1,
        isFetchingSearch2: state.dataSearch2.isFetching,
        search2: state.dataSearch2.search2,
        isFetchingSearch3: state.dataSearch3.isFetching,
        search3: state.dataSearch3.search3
    }
}

export default connect(mapStateToProps, null)(SearchImages)