console.log(React);
const heading=React.createElement(
    "h1",
    {id:"heading"},
    "hello world from react"
)

const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[React.createElement("h1",{},"this is h1 tag")]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"this is h1 tag")],
    React.createElement("h2",{},"this is h2 tag"))
])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);