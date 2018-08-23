import React, { Component } from 'react'


export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>Our employees</h2>
                {
                    this.props.employees.map(employee =>
                        <div id={`employee-${employee.id}`} key={employee.id}>
                            {employee.name}
                        </div>
                    )
                }
            </section>
        )
    }
}