import React, { Component } from 'react'
import classes from './SearchInput.module.css'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/actions'
import axios from 'axios'

class SearchInput extends Component {

    state = {
        currentSearch: '',
        suggestions: [],
        showSuggestions: true
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentSearch !== this.state.currentSearch) {
            this.getLocationSuggestions(this.state.currentSearch)
        }
    }

    searchLocationHandler = async ({ target: { value } }) => {
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

    getLocationSuggestions = async search => {
        if ( search !== '' ) {
            let searchResults = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${search}&language=en-us`)
            const result = searchResults.data.map( i =>  i.LocalizedName )
            const filteredResult = result.filter( (r,i) => result.indexOf(r) === i )
            this.setState({
                suggestions: filteredResult
            })
        } else {
            this.setState({suggestions: []})
        }
    }

    setCurrentSearch = search => {
        this.setState({
            currentSearch: search,
            showSuggestions: false
        })
    }

    onDelete = e => {
        this.setState({
            showSuggestions: true
        })
    }
    
    render(){

        const suggestions = this.state.suggestions.length > 0 && this.state.showSuggestions ? <ul className={classes.suggestions}>{this.state.suggestions.map( s => <li key ={s} onClick={() => this.setCurrentSearch(s)}>{s}</li>)}</ul> : null

        return (
            <>
                <div className={classes.group}>
                    <input type="text" onKeyDown={event => this.onDelete(event)} className={classes.input} value={this.state.currentSearch} onChange={this.searchLocationHandler} placeholder="Enter a city" id="name" required/>
                    <label htmlFor="name" className={classes.label}>Enter a city</label>
                    <a className={classes.icon}><i className='fas fa-search' onClick={() => this.sendLocationRequest(this.state.currentSearch)}></i></a>
                    {suggestions}
                </div>
            </>
         )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLocationRequest: search => dispatch(actions.locationRequest(search)),
        onWeatherRequest: location => dispatch(actions.weatherRequest(location)),
        onToggleModal: () => dispatch(actions.toggleModal())
    }
}

export default connect(null, mapDispatchToProps)(SearchInput)
