
  const heading1 = React.createElement("h1", 
  {id :"Tittle"},
   "Lets Start With Josh"); 
  const heading2 = React.createElement("h2", {id : "Tittle"}, "React");
  const container = React.createElement("div",{id : "container"}, [heading1,heading2]);
  const root =  ReactDOM.createRoot(document.getElementById("root")); 
  //passing a react  element inside the root 
  root.render(container);