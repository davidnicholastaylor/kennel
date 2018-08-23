import React, { Component } from 'react'


export default class LocationList extends Component {
    render() {
        return (
        <section className="locations">
        <h2>Our locations</h2>
        {
            this.props.locations.map(location =>
                <div id={`location-${location.id}`} key={location.id}>
                    {location.name}, {location.address}
                </div>
            )
        }
        </section>
        )
    }
}