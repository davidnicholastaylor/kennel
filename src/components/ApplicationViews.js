import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnersList'
import "./applicationViews.css"
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }


    deleteAnimal = id => AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
        }))
    deleteEmployee = id => EmployeeManager.removeAndList(id)
        .then(employees => this.setState({
            employees: employees
        }))
    deleteOwner = id => OwnerManager.removeAndList(id)
        .then(owners => this.setState({
            owners: owners
        }))

    componentDidMount() {
        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
    }


    render() {
        return (
            <div className="viewArea">
                <React.Fragment>
                    <Route exact path="/" render={(props) => {
                        return <LocationList locations={this.state.locations} />
                    }} />
                    <Route path="/locations/:locationId(\d+)" render={(props) => {
                        return <LocationDetail {...props} deleteLocation={this.deleteLocation} locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    }} />
                </React.Fragment>
            </div>
        )
    }
}