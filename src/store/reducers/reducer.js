import * as actionTypes from '../actions/actionTypes'

const initialState = {
    location: {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    },
    locationKey:'215854',
    currentCondition: [],
      dailyForecasts: {
        "Headline": {
          "EffectiveDate": "2019-12-25T19:00:00+02:00",
          "EffectiveEpochDate": 1577293200,
          "Severity": 4,
          "Text": "Rain Wednesday evening",
          "Category": "rain",
          "EndDate": "2019-12-26T01:00:00+02:00",
          "EndEpochDate": 1577314800,
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2019-12-21T07:00:00+02:00",
            "EpochDate": 1576904400,
            "Temperature": {
              "Minimum": {
                "Value": 8.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.8,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
          },
          {
            "Date": "2019-12-22T07:00:00+02:00",
            "EpochDate": 1576990800,
            "Temperature": {
              "Minimum": {
                "Value": 9.4,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 21,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
          },
          {
            "Date": "2019-12-23T07:00:00+02:00",
            "EpochDate": 1577077200,
            "Temperature": {
              "Minimum": {
                "Value": 13,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.9,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
          },
          {
            "Date": "2019-12-24T07:00:00+02:00",
            "EpochDate": 1577163600,
            "Temperature": {
              "Minimum": {
                "Value": 11.8,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 20.9,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 2,
              "IconPhrase": "Mostly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 12,
              "IconPhrase": "Showers",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
          },
          {
            "Date": "2019-12-25T07:00:00+02:00",
            "EpochDate": 1577250000,
            "Temperature": {
              "Minimum": {
                "Value": 13,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 18.3,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 6,
              "IconPhrase": "Mostly cloudy",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Light"
            },
            "Night": {
              "Icon": 12,
              "IconPhrase": "Showers",
              "HasPrecipitation": true,
              "PrecipitationType": "Rain",
              "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
          }
        ]
      },
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