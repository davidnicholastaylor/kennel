import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"  // Import LocationList component
import AnimalList from "./animals/AnimalList"  // Import LocationList component
import App from "./../App"  // Import LocationList component
import "./Kennel.css"

export default class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]
    
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]
    animalsFromAPI = [
        { id: 1, name: "Ginger", breed: "cocker spaniel" },
        { id: 2, name: "Cooper", breed: "yellow lab" }
    ]
    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }
    render() {
        return (
            <div>
                <App />
                <div className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                </div>
                <div className="kennel">
                <AnimalList animals={this.state.animals} />
                </div>
            </div>
        );
    }
}