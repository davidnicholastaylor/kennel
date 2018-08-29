import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./animal.css"

export default class AnimalCard extends Component {
    render() {
        return (
            <div key={this.props.animal.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.animal.name}
                        <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                            className="card-link">Discharge</a>
                    </h5>
                </div>
            </div>
        )
    }
}