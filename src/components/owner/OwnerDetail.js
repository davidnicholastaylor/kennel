import React, { Component } from "react"
import "./owner.css"


export default class OwnerDetail extends Component {
    render() {
        /*
            Using the route parameter, find the owner that the
            user clicked on by looking at the `this.props.owners`
            collection that was passed down from ApplicationViews
        */
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push(`/owners/edit/${owner.id}`)
                        }}>
                        Change Owner
                    </button>
                </div>
                <section className="owners">
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                {owner.name}
                            </h4>
                            <h6 className="card-title">{owner.phone}</h6>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )

    }
}