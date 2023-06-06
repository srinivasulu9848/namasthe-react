const heading = React.createElement("h1", {}, "Hello world from React");

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);