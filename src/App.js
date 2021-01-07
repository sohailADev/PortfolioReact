import './App.css';
import  "./Assets/css/style.css";
import  "./Assets/css/bootstrap.min.css";
import AboutMe from './Components/AboutMe/AboutMe';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import { Route, Switch} from "react-router-dom";


import React from "react"
function App() {
  
  return (
    <React.Fragment>
         <Navbar />
         <Switch>
     
           <Route exact path="/" component={AboutMe} />
           <Route exact  path="/portfolio" component={Portfolio} />
           <Route exact path="/contact" component={Contact} />
           {/* <Route
           exact
          path="/"
          render={(props) => <Welcome {...props} name="king" />}
          /> */}
       </Switch> 

       
         </React.Fragment>


  );
}

export default App;
