import React, { Component } from 'react'
import { loadDataSearch1, loadDataSearch2, loadDataSearch3 } from '../actions'
import { connect } from 'react-redux';

class Search extends Component {

    handleInput(query) {
      this.props.loadDataSearch1(query)
      this.props.loadDataSearch2(query)
      this.props.loadDataSearch3(query)
    }

    render() {
        return (
            <header className="App-header">
                <div className="App-search">
                    <div className="App-search-content">
                        <h1>API - Unsplash</h1>
                        <input type="text" placeholder="Search a image" onChange={(event) => this.handleInput(event.target.value)} />
                        <small>Example: wallpaper, background, dogs, technology</small>
                    </div>
                </div>
            </header>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadDataSearch1: (data) => dispatch(loadDataSearch1(data)),
        loadDataSearch2: (data) => dispatch(loadDataSearch2(data)),
        loadDataSearch3: (data) => dispatch(loadDataSearch3(data))
    }
}

export default connect(null, mapDispatchToProps)(Search)
