import React from 'react';

class UserClass extends React.Component {
constructor(props){
    super(props);
    this.state = {
        count: 0,
        count2: 1
    };
}
    render(){
       const { name, location } = this.props;
        return(
            <div className="userClass">
                <h4>Count: {this.state.count}</h4>
                <h4>Count: {this.state.count2}</h4>
                <h1>Name: {name}</h1>
                <h1>location: {location}</h1>
            </div>
        );
    }
}
 export default UserClass;
