import React from 'react'
import axios from 'axios'

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
    }

    render() {
        return (
           <div>
               <h2>Friend name here</h2>
           </div> 
        )
    }
}

export default Friends