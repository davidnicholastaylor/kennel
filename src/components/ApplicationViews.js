import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import "./applicationViews.css"

import AnimalList from './animals/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnersList'

import APIManager from "../modules/APIManager"

import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'
import OwnerDetail from './owner/OwnerDetail'

import AnimalForm from "./animals/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"

import AnimalEdit from "./animals/AnimalEdit"
import EmployeeEdit from "./employee/EmployeeEdit"
import OwnerEdit from "./owner/OwnerEdit"

import Login from './Login'



export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null


    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: []
    }

    addAnimal = (animal, link) => APIManager.post(animal, link)
        .then(() => APIManager.getAll("animals"))
        .then(animals => this.setState({
            animals: animals
        }))
    editAnimal = (animal, id, link) => APIManager.put(animal, id, link)
        .then(() => APIManager.getAll("animals"))
        .then(animals => this.setState({
            animals: animals
        }))
    deleteAnimal = (id, link) => APIManager.removeAndList(id, link)
        .then(() => APIManager.getAll("animals"))
        .then(animals => this.setState({
            animals: animals
        }))


    addEmployee = (employee, link) => APIManager.post(employee, link)
        .then(() => APIManager.getAll("employees"))
        .then(employees => this.setState({
            employees: employees
        }))
    editEmployee = (employee, id, link) => APIManager.put(employee, id, link)
        .then(() => APIManager.getAll("employees"))
        .then(employees => this.setState({
            employees: employees
        }))
    deleteEmployee = (id, link) => APIManager.removeAndList(id, link)
    .then(() => APIManager.getAll("employees"))
        .then(employees => this.setState({
            employees: employees
        }))


    addOwner = (owner, link) => APIManager.post(owner, link)
        .then(() => APIManager.getAll("owners"))
        .then(owners => this.setState({
            owners: owners
        }))
    editOwner = (owner, id, link) => APIManager.put(owner, id, link)
        .then(() => APIManager.getAll("owners"))
        .then(owners => this.setState({
            owners: owners
        }))
    deleteOwner = (id, link) => APIManager.removeAndList(id, link)
        .then(() => APIManager.getAll("owners"))
        .then(owners => this.setState({
            owners: owners
        }))


    componentDidMount() {
        APIManager.getAll("animals").then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        APIManager.getAll("employees").then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        APIManager.getAll("locations").then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        APIManager.getAll("owners").then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
    }


    render() {
        return (
            <div className="viewArea">
                <React.Fragment>
                    <Route path="/login" component={Login} />


                    <Route exact path="/" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <LocationList {...props}
                                locations={this.state.locations} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>
                    <Route path="/locations/:locationId(\d+)" render={(props) => {
                        return <LocationDetail {...props}
                        employees={this.state.employees}
                        locations={this.state.locations} />
                    }} />


                    <Route exact path="/animals" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <AnimalList {...props}
                                animals={this.state.animals}
                                deleteAnimal={this.deleteAnimal} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>

                    <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                        return <AnimalEdit {...props}
                            editAnimal={this.editAnimal}
                            animals={this.state.animals}
                            employees={this.state.employees} />
                    }} />
                    <Route path="/animals/:animalId(\d+)" render={(props) => {
                        return <AnimalDetail {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals}
                            employees={this.state.employees} />
                    }} />


                    <Route exact path="/employees" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <EmployeeList {...props}
                            deleteEmployee={this.deleteEmployee}
                            deleteAnimal={this.deleteAnimal}
                                employees={this.state.employees}
                                animals={this.state.animals}
                                />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            locations={this.state.locations} />
                    }} />
                    <Route path="/employees/edit/:employeeId(\d+)" render={(props) => {
                        return <EmployeeEdit {...props}
                            editEmployee={this.editEmployee}
                            locations={this.state.locations} />
                    }} />
                    <Route path="/employees/:employeeId(\d+)" render={(props) => {
                        return <EmployeeDetail {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees} />
                    }} />


                    <Route exact path="/owners" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <OwnerList {...props}
                                owners={this.state.owners}
                                deleteOwner={this.deleteOwner} />
                        } else {
                            return <Redirect to="/login" />
                    }} }/>
                    <Route path="/owners/new" render={(props) => {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            animals={this.state.animals} />
                    }} />
                    <Route path="/owners/edit/:ownerId(\d+)" render={(props) => {
                        return <OwnerEdit {...props}
                            editOwner={this.editOwner}
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