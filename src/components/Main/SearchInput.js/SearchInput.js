import React, { Component } from 'react'
import classes from './SearchInput.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/actions'

class SearchInput extends Component {

    state = {
        currentSearch: ''
    }

    searchLocationHandler = ({ target: { value } }) => {
        this.setState({
            currentSearch: value.toLowerCase()
        })
    }

    sendLocationRequest = search => {
        this.props.onLocationRequest(search)
        this.setState({
            currentSearch: ''
        })
    }
    
    render(){
        return (
            <>
                <div className={classes.group}>
                    <input type="text" className={classes.input} value={this.state.currentSearch} onChange={this.searchLocationHandler} placeholder="Enter a city" id="name" required/>
                    <label htmlFor="name" className={classes.label}>Enter a city</label>
                    <a className={classes.icon}><i className='fas fa-search' onClick={() => this.sendLocationRequest(this.state.currentSearch)}></i></a>
                </div>
            </>
         )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLocationRequest: search => dispatch(actions.locationRequest(search)),
        onToggleModal: () => dispatch(actions.toggleModal())
    }
}

export default connect(null, mapDispatchToProps)(SearchInput)
