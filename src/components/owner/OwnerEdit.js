import React, { Component } from "react"
import "./owner.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        phone: "",
        animal: ""
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
    editOwner = evt => {
        evt.preventDefault()
        if (this.state.animal === "") {
            window.alert("Please select a animal")
        } else {
            const owner = {
                name: this.state.ownerName,
                phone: this.state.phone,
                animalId: this.props.animals.find(e => e.name === this.state.animal).id
            }
            const ownerEditId = parseInt(this.props.match.params.ownerId)

            // Create the owner and redirect user to owner list
            this.props.editOwner(owner, ownerEditId, "owners").then(() => this.props.history.push("/owners"))
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
                    <button type="submit" onClick={this.editOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}