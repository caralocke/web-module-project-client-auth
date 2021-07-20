import React from 'react'

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