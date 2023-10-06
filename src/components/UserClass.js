import React from 'react';

class UserClass extends React.Component {
constructor(props){
    super(props);
    this.state = {
        count: 0,
        count2: 1
    };
    console.log(this.props.name + 'Child Constructor');
}
  componentDidMount(){
    console.log(this.props.name + 'child componentDidMount')
  } 
render(){
        console.log(this.props.name+ 'Child Render');
       const { name, location } = this.props;
       const { count, count2 } = this.state;
        return(
            <div className="userClass">
                <h4>Count: {count}</h4>
                <button
                onClick = { () => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }
                }>
                Count Increase
                </button>
                <h4>Count: {count2}</h4>
                <h1>Name: {name}</h1>
                <h1>location: {location}</h1>
            </div>
        );
    }
}
 export default UserClass;
