import React, { Component } from 'react'
import classes from './Favorties.module.css'
import * as actions from '../../store/actions/actions'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Favorites extends Component {

    state = {
        currentWeather: []
    }

    removeFavorite = location => {
        actions.addOrRemoveFavorite(location)
        this.setState({})
    }

    componentDidMount(){
        const favoritesLS = window.localStorage.getItem('favorites')
        const favorites = JSON.parse(favoritesLS)
        if (favorites.length > 0) {
            favorites.forEach( f => {
                axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${f.Key}?apikey=${process.env.REACT_APP_API_KEY}`)
                    .then(res => {
                        console.log(res.data[0])
                        let newState = [...this.state.currentWeather, res.data[0]]
                        this.setState({
                            currentWeather: newState
                        })
                    })
            } )
        }
    }

    redirectToLocation = location => {
        this.props.updateCurrentLocation(location)
        this.props.getDailyForecasts(location.Key)
    }

    render(){
        console.log('state:',this.state)
        const favoritesLS = window.localStorage.getItem('favorites')
        const favorites = JSON.parse(favoritesLS)
        console.log('favorites:',favorites)

        return (
            <div className={classes.favorites}>
                <h2>FAVORITES</h2>
                <div className={classes.cards}>
                    <div className={classes.cardsContainer}>
                        {favorites.map( (f, index) => <div key={new Date()} className={classes.card}>
                            <div className={classes.locationName} onClick={() => this.redirectToLocation(f)}>
                                <Link to="/">
                                  <h4>{f.LocalizedName}</h4>
                                 <h4>{f.Country.LocalizedName}</h4>
                                </Link>
                            </div>
                            <div className={classes.temperature}>
                                {this.state.currentWeather[index] ? `${this.state.currentWeather[index].Temperature.Metric.Value}°c` : null}
                            </div>
                            <div className={classes.weatherText}>
                                {this.state.currentWeather[index] ? this.state.currentWeather[index].WeatherText: null}
                            </div>
                            <a className={classes.delete} onClick={() => this.removeFavorite(f)}><i className="fas fa-trash"></i></a>
                        </div> )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCurrentLocation: location => dispatch(actions.updateLocation(location)),
        getDailyForecasts: key => dispatch(actions.getDailyForecasts(key))
    }
}

export default connect(null, mapDispatchToProps)(Favorites)