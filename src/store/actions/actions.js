import * as actionTypes from './actionTypes'
import axios from 'axios'

export const updateLocation = location => {
    return {
        type: actionTypes.UPDATE_LOCATION,
        value: location
    }
}

export const getCurrentWeather = key => {
    return dispatch => {
        axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${process.env.REACT_APP_API_KEY}`)
            .then( res => {
                dispatch(updateCurrentCondition(res.data))
            })
    }
}

export const updateCurrentCondition = data => {
    return {
        type: actionTypes.UPDATE_CURRENT_CONDITION,
        val: data
    }
}

export const getDailyForecasts = key => {
    return dispatch => {
        axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`)
            .then(res => {
                dispatch(updateForecasts(res.data.DailyForecasts))
            })
    }
}

export const updateForecasts = data  => {
    return {
        type: actionTypes.UPDATE_FORECASTS,
        val: data
    }
}

export const locationNotFound = () => {
    return {
        type: actionTypes.LOCATION_ERROR
    }
}

export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
    }
}

export const weatherRequest = location => {
    return dispatch => {
        dispatch(updateLocation(location))
        dispatch(getCurrentWeather(location.Key))
        dispatch(getDailyForecasts(location.Key))
    }
}

export const locationRequest = search => {
    return dispatch => {
        axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${process.env.REACT_APP_API_KEY}&q=${search}&language=en-us`)
            .then( res => {
                if (res.data.length > 0) {
                    dispatch(updateLocation(res.data[0]))
                    dispatch(getCurrentWeather(res.data[0].Key))
                    dispatch(getDailyForecasts(res.data[0].Key))
                } else {
                    dispatch(locationNotFound())
                }
            })
    }
}

export const updateFavorites = data => {
    return {
        type: actionTypes.UPDATE_FAVORITES,
        val: data
    }
}

export const addOrRemoveFavorite = location => {
    let currentFavoritesLS = window.localStorage.getItem('favorites')
    let currentFavorites = JSON.parse(currentFavoritesLS)
    let find = currentFavorites.find( f => f.Key === location.Key)
    if (find) {
        return dispatch => {
            let newCurrentFavorites = currentFavorites.filter( f => f.Key !== location.Key )
            dispatch(updateFavorites(newCurrentFavorites))
            let newCurrentFavoritesString = JSON.stringify(newCurrentFavorites)
            window.localStorage.setItem('favorites', newCurrentFavoritesString)
        }
    } else {
        return dispatch => {
            currentFavorites.push(location)
            dispatch(updateFavorites(currentFavorites))
            let newCurrentFavorites = JSON.stringify(currentFavorites)
            window.localStorage.setItem('favorites', newCurrentFavorites)
        }
    }
}

export const getFavoritesFromLS = () => {
    const currentFavoritesLS = window.localStorage.getItem('favorites')
    const currentFavorites = JSON.parse(currentFavoritesLS)
    return {
        type: actionTypes.UPDATE_FAVORITES,
        val: currentFavorites
    }
}