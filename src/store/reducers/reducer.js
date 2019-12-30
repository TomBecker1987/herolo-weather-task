import * as actionTypes from '../actions/actionTypes'

const initialState = {
    location: {},
    locationKey:'215854',
    currentCondition: [],
    dailyForecasts: [],
    locationError: false,
    favorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_LOCATION:
            return {
                ...state,
                location: action.value,
                locationKey: action.value.Key,
                locationError: false
            }
        case actionTypes.LOCATION_ERROR:
            return {
                ...state,
                location: {},
                locationError: true
            }
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                locationError: !state.locationError
            }
        case actionTypes.UPDATE_CURRENT_CONDITION:
            return {
              ...state,
              currentCondition: action.val
            }
        case actionTypes.UPDATE_FORECASTS:
            return {
              ...state,
              dailyForecasts: action.val
            }
        case actionTypes.UPDATE_FAVORITES:
          return {
            ...state,
            favorites: action.val
          }
    }

    return state
}

export default reducer