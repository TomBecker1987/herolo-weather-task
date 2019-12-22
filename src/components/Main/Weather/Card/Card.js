import React, { Component } from 'react'
import classes from './Card.module.css'

class Card extends Component {
    render(){

        const days = this.props.days
        const index = this.props.index
        const temperature = this.props.temperature
        const iconNum = this.props.iconNum
        let weatherIconNum = this.props.iconNum.toString()
        if (weatherIconNum.length === 1) {
            weatherIconNum = '0'.concat(weatherIconNum)
        }

        const data = iconNum? 
            <>
                <h4 className={classes.day}>
                    {days[index]}
                </h4>
                <p className={classes.temperature}>
                    {`${temperature}°c`}
                </p>
                <img className={classes.image} src={require(`../../../../images/weather-icons/${weatherIconNum}-s.png`)}/>
            </>
            : null

        return (
            <div className={classes.forecast}>
                {data}
            </div>
        )
    }
}

export default Card