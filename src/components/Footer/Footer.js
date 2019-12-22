import React, { Component } from 'react'
import classes from './footer.module.css'
import Media from 'react-media'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render(){
        return (
            <div className={classes.footer}>
                <Media queries={{
                    small: "(max-width: 599px)",
                    medium: "(min-width: 600px)"
                }}>
                    {matches => (
                            <>
                                {matches.small && <nav>
                                    <Link to="/">HOME</Link>
                                    <span>|</span>
                                    <Link to="favorites">FAVORITES</Link>
                                 </nav>}
                                {matches.medium && null}
                            </>
                        )
                    }
                </Media>
            </div>
        )
    }
}

export default Footer