import React, { Component } from 'react'

export default class Delete extends Component {
    render() {
        return (
            <button onClick={this.props.handleDelete} >pack me!</button>
        )
    }
}
