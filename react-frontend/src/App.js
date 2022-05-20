import React from 'react';
import './App.css';
import {BrowserRouter,  Route } from 'react-router-dom'
//import ListEmployeeComponent from './components/ListGroupsComponent';
import ListGroupComponent from './components/ListGroupComponent'
import CreateGroupComponet from './components/CreateGroupComponent'
import ViewGroupComponent from './components/viewGroupComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
//import CreateEmployeeComponent from './components/CreateEmployeeComponent';
//import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
//import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
               <HeaderComponent />
                    <Route> 
                          <Route path = "/" element  = {ListGroupComponent}></Route>
                          <Route path = "/groups" component = {ListGroupComponent}></Route>
                          <Route path = "/add-group/:id" component = {CreateGroupComponet}></Route>
                          <Route path = "/view-group/:id" component = {ViewGroupComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Route>
              <FooterComponent />
        </BrowserRouter>
    </div>
    
  );
}

export default App;
