import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"  // Import LocationList component
import App from "./../App"  // Import LocationList component


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <App />
                <EmployeeList />
                <LocationList />
            </div>
        );
    }
}