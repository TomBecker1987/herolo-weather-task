import React, { Component } from 'react'
import classes from './Main.module.css'
import SearchInput from './SearchInput.js/SearchInput'
import Weather from './Weather/Weather'
import { connect } from 'react-redux'
import Modal from './Modal/Modal'

class Main extends Component {

    render(){

        const modal = this.props.locationError? 
            <Modal/>
            :
            null

        return (
            <div className={classes.main}>
                <SearchInput/>
                <Weather/>
                {modal}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        locationError: state.locationError
    }
}

export default connect(mapStateToProps)(Main)