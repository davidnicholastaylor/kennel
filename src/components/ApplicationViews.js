import { Route } from 'react-router-dom'
import React, { Component } from "react"
import "./applicationViews.css"

import AnimalList from './animals/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnersList'

import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"

import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'

import AnimalForm from "./animals/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"

import AnimalEdit from "./animals/AnimalEdit"


export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    addAnimal = animal => AnimalManager.post(animal)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))
    editAnimal = (animal, id) => AnimalManager.put(animal, id)
        .then(() => AnimalManager.getAll())
        .then(animals => this.setState({
            animals: animals
        }))
    deleteAnimal = id => AnimalManager.removeAndList(id)
        .then(animals => this.setState({
            animals: animals
        }))
    addEmployee = employee => EmployeeManager.post(employee)
        .then(() => EmployeeManager.getAll())
        .then(employees => this.setState({
            employees: employees
        }))
    deleteEmployee = id => EmployeeManager.removeAndList(id)
        .then(employees => this.setState({
            employees: employees
        }))
    addOwner = owner => OwnerManager.post(owner)
        .then(() => OwnerManager.getAll())
        .then(owners => this.setState({
            owners: owners
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
                        return <LocationDetail {...props}
                            deleteLocation={this.deleteLocation}
                            locations={this.state.locations} />
                    }} />
                    <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    }} />

                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                        return <AnimalEdit {...props}
                            editAnimal={this.editAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals} />
                    }} />
                    <Route exact path="/employees" render={(props) => {
                        return <EmployeeList {...props}
                            employees={this.state.employees}
                            deleteEmployee={this.deleteEmployee} />
                    }} />
                    <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            animals={this.state.animals} />
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    }} />
                    <Route exact path="/owners" render={(props) => {
                        return <OwnerList {...props}
                            owners={this.state.owners}
                            deleteOwner={this.deleteOwner} />
                    }} />
                    <Route path="/owners/new" render={(props) => {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            animals={this.state.animals} />
                    }} />
                    <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props}
                            deleteOwner={this.deleteOwner}
                            owners={this.state.owners} />
                    }} />
                </React.Fragment>
            </div>
        )
    }
}