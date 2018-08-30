import React, { Component } from "react"
import "./location.css"


export default class LocationDetail extends Component {
    render() {
        /*
            Using the route parameter, find the location that the
            user clicked on by looking at the `this.props.locations`
            collection that was passed down from ApplicationViews
        */
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (

            <section className="locations">
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {location.name}
                        </h4>
                        <h5 className="card-title">{location.address}</h5 >
                    </div>
                    <div>
                <h5 className="card-title">Caretakers</h5>
                    {
                        this.props.employees
                            .filter(employee => employee.locationId === location.id)
                            .map(employee => <div key= {employee.id}><li className="employeeList">{employee.name}</li></div>)
                    }
                </div>
                </div>
            </section>
        )
    }
}