import React from 'react';
import Axios from 'axios';

export default class Events extends React.Component {
    state = {
        events:[]
    }

    componentDidMount() {
        Axios.get(`https://s3-eu-west-1.amazonaws.com/test-assignment/test-assignment.json`)
        .then(res => {
            console.log(res)
            this.setState({events: res.data})
        })    
    }

    render() {
        return(
            <ul>
            {this.state.events.map(event => <li>{event.name}</li>)}
            </ul>

        )
    }

}