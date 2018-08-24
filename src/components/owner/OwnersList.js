import React, { Component } from 'react'


export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h2>Our owners</h2>
                {
                    this.props.owners.map(owner =>
                        <div id={`owner--${owner.id}`} key={owner.id}>
                            {owner.name}, {owner.phoneNumber}
                        </div>
                    )
                }
            </section>
        )
    }
}