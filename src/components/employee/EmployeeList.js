import React, { Component } from "react"
import "./employee.css"
import EmployeeCard from "./EmployeeCard"


export default class EmployeeList extends Component {
    render () {
        return (
            <React.Fragment>
            <div className="employeeButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/employees/new")}
                            className="btn btn-success">
                        Add employee
                    </button>
                </div>
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <EmployeeCard key={employee.id} employee={employee} {...this.props} />  
                )
            }
            </section>
            </React.Fragment>
        )
    }
}