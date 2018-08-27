import React, { Component } from "react"
import "./owner.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        breed: "",
        owner: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating owner object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.owner === "") {
            window.alert("Please select a caretaker")
        } else {
            const owner = {
                name: this.state.ownerName,
                phone: this.state.phone,
                ownerId: this.props.owners.find(e => e.name === this.state.owner).id
            }

            // Create the owner and redirect user to owner list
            this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ownerName"
                               placeholder="Owner name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone number</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="phone" placeholder="Phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="animal">Assign to animal</label>
                        <select defaultValue="" name="animal" id="animal"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an animal</option>
                        {
                            this.props.animals.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}