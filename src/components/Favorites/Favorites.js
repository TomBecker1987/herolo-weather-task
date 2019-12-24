import React, { Component } from 'react'
import classes from './Favorties.module.css'
import * as actions from '../../store/actions/actions'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Favorites extends Component {

    state = {
        currentWeather: [],
        favorites: JSON.parse(window.localStorage.getItem('favorites'))
    }

    componentDidMount(){
        let favorites = this.state.favorites
            favorites.forEach( f => {
                axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${f.Key}?apikey=${process.env.REACT_APP_API_KEY}`)
                    .then(res => {
                        let newState = [...this.state.currentWeather, res.data[0]]
                        this.setState({
                            currentWeather: newState
                        })
                    })
            } )
    }

    removeFavorite = location => {
        this.props.addOrRemoveFavorite(location)
        this.setState(prevState => ({
            favorites: prevState.favorites.filter( f => f.Key !== location.Key )
        }))
    }

    redirectToLocation = location => {
        this.props.updateCurrentLocation(location)
        this.props.getDailyForecasts(location.Key)
    }

    render(){
        const favorites = this.state.favorites

        return (
            <div className={classes.favorites}>
                <h2>FAVORITES</h2>
                <div className={classes.cards}>
                    <div className={classes.cardsContainer}>
                        {favorites? favorites.map( (f, index) => <div key={f.Key} className={classes.card}>
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
                        </div> ) : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}


const mapDispatchToProps = dispatch => {
    return {
        updateCurrentLocation: location => dispatch(actions.updateLocation(location)),
        getDailyForecasts: key => dispatch(actions.getDailyForecasts(key)),
        getFavoritesFromLS: () => dispatch(actions.getFavoritesFromLS()),
        addOrRemoveFavorite: location => dispatch(actions.addOrRemoveFavorite(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)