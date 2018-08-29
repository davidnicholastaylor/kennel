import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./employee.css"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.employee.name}
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteemployee(this.props.employee.id)}
                            className="card-link">Discharge</a>
                    </h5>
                </div>
            </div>
        )
    }
}