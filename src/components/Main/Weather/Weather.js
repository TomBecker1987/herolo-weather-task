import React, { Component } from 'react'
import classes from './Weather.module.css'
import { connect } from 'react-redux'
import Card from './Card/Card'
import * as actions from '../../../store/actions/actions'

class Weather extends Component {

    state = {}

    componentDidMount(){
        this.props.getCurrentWeather(this.props.location.Key)
    }

    addRemoveFavorite = location => {
        this.props.addOrRemoveFavorites(location)
        this.setState({})
    }

    getCurrentDays = todayIndex => {
        let index = todayIndex + 1
        let newArray = []
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const array = [0,1,2,3,4,5,6]
        array.forEach( i => {
            if ( i + index >= 7 ) {
                newArray.push( i + index - 7 )
            } else {
                newArray.push( i + index )
            }
        } )

        const newDays = newArray.map( i => {
            return days[i]
        } )

        return newDays
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
        const date = new Date()
        const todayIndex = date.getDay()
        const correctDays = this.getCurrentDays(todayIndex)
        let currentTemperature
        let currentCity
        let currentCountry
        let data

        if (Object.entries(this.props.currentCondition).length !== 0 && Object.entries(this.props.location).length !== 0) {
            weatherIconNum = this.props.currentCondition[0].WeatherIcon.toString()
            currentTemperature = this.props.currentCondition[0].Temperature.Metric.Value || null
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
                        <Card day={correctDays[index]} key={index} temperature={f.Temperature.Maximum.Value} iconNum={f.Day.Icon}/>
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
        getCurrentWeather: key => dispatch(actions.getCurrentWeather(key)),
        updateFavorites: favorites => dispatch(actions.updateFavorites(favorites)),
        addOrRemoveFavorites: location => dispatch(actions.addOrRemoveFavorite(location))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)