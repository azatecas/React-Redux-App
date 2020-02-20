import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';

const GetInfo = (props) => {

    const handleFetchData = e => {
        e.preventDefault()
        props.getData()        
    }

    return (
        <div>
           {props.isFetching ? <p>**Fetching Data**</p> : <button onClick={handleFetchData}>Rick and Morty</button>} 
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isFetching: state.isFetching
    }
}

export default connect(
    mapStateToProps,    
    { getData }
    )(GetInfo)