import React, { Component } from 'react'


export default class AnimalList extends Component {
    render() {
        return (
        <section className="animals">
                <h2>Our animals</h2>
                {
                    this.props.animals.map(animal =>
                        <div id={`animal--${animal.id}`} key={animal.id}>
                            {animal.name}
                        </div>
                    )
                }
            </section>
        )
    }
} 