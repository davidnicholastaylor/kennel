import React, { Component } from "react"
import "./employee.css"

export default class EmployeeForm extends Component {
    // Set initial state
    state = {
        employeeName: "",
        job: "",
        location: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating employee object, and
        invoking the function reference passed from parent component
     */
    editEmployee = evt => {
        evt.preventDefault()
        if (this.state.location === "") {
            window.alert("Please select an location")
        } else {
            const employee = {
                name: this.state.employeeName,
                job: this.state.job,
                locationId: this.props.locations.find(e => e.name === this.state.location).id
            }
            const employeeEditId = parseInt(this.props.match.params.employeeId)

            // Create the employee and redirect user to employee list
            this.props.editEmployee(employee, employeeEditId, "employees").then(() => this.props.history.push("/employees"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="employeeName"
                               placeholder="Employee name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="job">Job</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="job" placeholder="Job" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign to location</label>
                        <select defaultValue="" name="location" id="location"
                                onChange={this.handleFieldChange}>
                            <option value="">Select a location</option>
                        {
                            this.props.locations.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.editEmployee} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}