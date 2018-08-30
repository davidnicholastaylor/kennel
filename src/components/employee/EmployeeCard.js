import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./employee.css"
import AnimalCard from "../animals/AnimalCard"

export default class EmployeeCard extends Component {
    render() {
        return (
            <React.Fragment>
            {
                    <div key={this.props.employee.id} className="card card--employee">
                        <div className="card">
                            <h5 className="card-title">
                                {this.props.employee.name}
                                <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>

                            <button
                                onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                                className="card-link">Delete</button>
                            </h5>

                            <h6 className="card-title">Caretaker For</h6>
                            <div className="card">
                            {
                                this.props.animals
                                    .filter(anml => anml.employeeId === this.props.employee.id)
                                    .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                            }
                            </div>

                        </div>
                    </div>
                
            }
            </React.Fragment>
        )
    }
}