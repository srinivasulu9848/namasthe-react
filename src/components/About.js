import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
    constructor(props){
        super(props)
        console.log('Parent Consturctor');
    }
    componentDidMount(){
        console.log('Parent componentDidMount')
      }
    render(){
        console.log('parent Render');
        return(
            <div>
            <h1>Hello about</h1>
            <h1>Namasthe Srinu</h1>
            <UserClass name={"Srinu"} location={"ullagallu"}/>
            <UserClass name={"Jill"} location={"ulla"}/>
        </div>  
        )
    }
    }
// const About = () => {
//     return(
//         <div>
//             <h1>Hello about</h1>
//             <h1>Namasthe Srinu</h1>
//             <UserClass name={"Srinu"} location={"ullagallu"}/>
//         </div>
//     )
// }
export default About;