import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from './store/actions/actions'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Favorites from './components/Favorites/Favorites'
import Footer from './components/Footer/Footer'
import './App.css'
require('dotenv').config()

class App extends Component {

  componentDidMount(){
    this.props.onLocationRequest('tel aviv')
    this.props.getCurrentWeather('215854')
    this.props.getDailyForecasts('215854')
    this.props.getFavoritesFromLS()
  }

  render(){
    if (!window.localStorage.favorites) {
      window.localStorage.setItem('favorites', JSON.stringify([]))
    }
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/favorites" exact component={Favorites}/>
        </Switch>
        <Footer/>
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
    onLocationRequest: location => dispatch(actions.locationRequest(location)),
    getCurrentWeather: key => dispatch(actions.getCurrentWeather(key)),
    getDailyForecasts: key => dispatch(actions.getDailyForecasts(key)),
    getFavoritesFromLS: () => dispatch(actions.getFavoritesFromLS())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
