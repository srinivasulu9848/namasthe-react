// const heading = React.createElement("h1", {}, "Hello world from React");

// console.log(heading);

/* 
<div id= "parent">
    <div id = "child 1">
        <h1>Hi Jill</h1>
    </div>
    <div id = "child 2">
        <h2>Hi Srinu</h2>
    </div>
</div>
*/
const parent = React.createElement("div",{id: "parent"},
[React.createElement("div", {id: "child 1"}, React.createElement('h1',{}, "Hi Jill") ),
React.createElement("div", {id: "child 2"}, React.createElement('h2',{}, "Hi Srinu") )]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);