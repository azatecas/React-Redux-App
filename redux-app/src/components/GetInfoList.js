import React from 'react';
import { connect } from 'react-redux';

const GetInfoList = (props) => {
    return (
        <>
            {props.characters.map(item => (
                <div key={item.id} className="character-names">{item.name}</div>
            ))}
        </>
    )
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}
export default connect(mapStateToProps, {})(GetInfoList)