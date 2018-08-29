import React, { Component } from "react"
import "./employee.css"


export default class EmployeeDetail extends Component {
    render() {
        /*
            Using the route parameter, find the employee that the
            user clicked on by looking at the `this.props.employees`
            collection that was passed down from ApplicationViews
        */
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <React.Fragment>
                <div className="employeeButton">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/employees/edit/${employee.id}`)
                    }}>
                    Change Employee
                    </button>
            </div>
            <section className="employees">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {employee.name}
                        </h4>
                        <h6 className="card-title">{employee.job}</h6>
                    </div>
                </div>
            </section>
            </React.Fragment>
        )
    }
}