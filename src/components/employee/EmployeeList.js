import React, { Component } from "react"
import "./employee.css"
import EmployeeCard from "./EmployeeCard"
import AnimalCard from "../animals/AnimalCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <EmployeeCard key={employee.id} employee={employee} {...this.props} />  
                )
            }
            
            </section>
        )
    }
}