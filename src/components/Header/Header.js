import React, { Component } from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import Media from 'react-media'

class Header extends Component {
    render(){
        return (
            <div className={classes.header}>
                <h6>
                    HEROLO WEATHER TASK
                </h6>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px)"
                }}>
                    {matches => (
                            <>
                                {matches.small && null}
                                {matches.medium && <nav>
                                    <Link to="/">HOME</Link>
                                    <span>|</span>
                                    <Link to="/favorites">FAVORITES</Link>
                                 </nav>}
                            </>
                        )
                    }
                </Media>
            </div>
        )
    }
}

export default Header