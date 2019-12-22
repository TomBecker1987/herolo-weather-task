import React, { Component } from 'react'
import classes from './Weather.module.css'
import { connect } from 'react-redux'
import Card from './Card/Card'
import * as actions from '../../../store/actions/actions'

class Weather extends Component {

    state = {}

    addRemoveFavorite = location => {
        actions.addOrRemoveFavorite(location)
        this.setState({})
    }

    render(){
        let heart
        const favoritesLS = window.localStorage.getItem('favorites')
        const favorites = JSON.parse(favoritesLS)
        const find = favorites.find( f => f.Key === this.props.location.Key )
        if (find) {
            heart = 'fas fa-heart'
        } else {
            heart = 'far fa-heart'
        }
        let weatherIconNum
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let currentTemperature
        let currentCity
        let currentCountry
        let data

        if (Object.entries(this.props.currentCondition).length !== 0 && Object.entries(this.props.location).length !== 0) {
            weatherIconNum = this.props.currentCondition[0].WeatherIcon.toString()
            currentTemperature = this.props.currentCondition[0].Temperature.Metric.Value
            currentCity = this.props.location.LocalizedName
            currentCountry = this.props.location.Country.LocalizedName 
            if (weatherIconNum.length === 1) {
                weatherIconNum = '0'.concat(weatherIconNum)
            }

            
            data = <div className={classes.today}>
                <img className={classes.currentImage} src={require(`../../../images/weather-icons/${weatherIconNum}-s.png`)}/>
                <div className={classes.todayTemp}>
                    <h4>{`${currentCity},`}</h4>
                    <h4>{currentCountry}</h4>
                    <h4>{`${currentTemperature}°c`}</h4>
                </div>
                <div className={classes.favorites}  onClick={() => this.addRemoveFavorite(this.props.location)}>
                    <i className={heart}></i>
                </div>
            </div>
        }
        
        const forecasts = this.props.forecasts.DailyForecasts || this.props.forecasts

        return (
            <div className={classes.weather}>
                {data}
                <div className={classes.forecasts}>
                    {forecasts? forecasts.map( (f, index) => (
                        <Card days={days} key={index} index={index} temperature={f.Temperature.Maximum.Value} iconNum={f.Day.Icon}/>
                    ) ) : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentCondition: state.currentCondition,
        location: state.location,
        forecasts: state.dailyForecasts,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToFavorites: location => dispatch(actions.addToFavorites(location)),
        removeFromFavorites: location => dispatch(actions.removeFromFavorites(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)