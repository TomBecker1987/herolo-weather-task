import React, { Component } from 'react'
import classes from './Modal.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/actions'

class Modal extends Component {

    render(){
        return (
            <div className={classes.modal} onClick={this.props.onToggleModal}>
                <div className={classes.results}>
                    THERE ARE NO RESULTS 
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleModal: () => dispatch(actions.toggleModal())
    }
}

export default connect(null, mapDispatchToProps)(Modal)

