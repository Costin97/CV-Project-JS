import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Switch, Redirect } from "react-router";
import Schooling from "./pages/Schooling";
import Wishes from "./pages/Wishes";
import Skills from "./pages/Skills";



const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/home'></Redirect>
      </Route>
      <Route path='/home'>
        <NavBar></NavBar>
      </Route>
      <Route path='/achievements'>
        <Schooling></Schooling>
      </Route>
      <Route path='/dorinte'>
        <Wishes></Wishes>
      </Route>
      <Route path='/aptitudini'>
        <Skills></Skills>
      </Route>
    </Switch>
  )
}

export default App;