import React, { Component } from 'react'
import { Link } from "react-router-dom"



export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                <h2>Locations</h2>
                {
                    this.props.locations.map(location =>
                        <div id={`location--${location.id}`} key={location.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {location.name}
                                    <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </section>
        )
    }
}